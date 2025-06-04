import { getHS, postHS } from '@/client';
import { data } from '@/types';
import { useUser } from '@clerk/clerk-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useGetHS() {
  const { user } = useUser();

  useQuery({
    queryKey: ['housingSocieties'],
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
    mutationKey: ['housingSocieties'],
    mutationFn: async () => {
      if (!user) return new Error('no user ');
      await postHS(data, user.id);
    },
    onError: e => alert('Error: ' + e),
    onSuccess: () => {
      toast('Added developer');
      queryClient.invalidateQueries({ queryKey: ['getHs'] });
    },
  });
}
