import { getHS, postHS } from '@/client';
import { data } from '@/types';
import { useUser } from '@clerk/clerk-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useGetHS() {
  const { user } = useUser();

  useQuery({
    queryKey: ['getHs'],
    queryFn: async () => {
      if (!user) return new Error('no user ');
      const response = await getHS(user.id);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}

export function usePostHS() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['postHs'],
    mutationFn: async () => {
      if (!user) return new Error('no user ');
      await postHS(data, user.id);
    },
    onError: e => alert('Error: ' + e),
    onSuccess: () => {
      alert('Added developer');
      queryClient.invalidateQueries({ queryKey: ['getHs'] });
    },
  });
}
