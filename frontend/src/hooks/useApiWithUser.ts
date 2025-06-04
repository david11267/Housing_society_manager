import { getHS, postHS } from '@/client';
import { type HsData } from '@/types';
import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useGetHS() {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: ['housingSocieties'],
    queryFn: async () => {
      const token = await getToken();
      if (token) return getHS(token);
    },
  });
}

export function usePostHS() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['housingSocieties'],
    mutationFn: async (data: HsData) => {
      const token = await getToken();
      if (token) return postHS(data, token);
    },
    onError: e => alert('Error: ' + e),
    onSuccess: () => {
      toast('Added developer');
      queryClient.invalidateQueries({ queryKey: ['getHs'] });
    },
  });
}
