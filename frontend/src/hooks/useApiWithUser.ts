import { useUser } from '@clerk/clerk-react';
import { useQuery } from '@tanstack/react-query';

export function useApiWithUser() {
  const { user } = useUser();

  useQuery({
    queryKey: ['todos', todoId],
    queryFn: async () => {
      const response = await fetch('/todos/' + todoId);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}
