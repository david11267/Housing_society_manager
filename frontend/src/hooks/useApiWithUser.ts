import { deleteHS, getHS, postHS, putHS } from "@/client";
import { type HousingSociety } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useGetHS() {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: ["housingSocieties"],
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
    mutationKey: ["housingSocieties"],
    mutationFn: async (data: HousingSociety) => {
      const token = await getToken();
      if (token) return postHS(data, token);
    },
    onError: (e) => alert("Error: " + e),
    onSuccess: () => {
      toast("Added developer");
      queryClient.invalidateQueries({ queryKey: ["housingSocieties"] });
    },
  });
}

export function usePutHS() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["housingSocieties"],
    mutationFn: async (data: HousingSociety) => {
      const token = await getToken();
      if (token) return putHS(data, token);
    },
    onError: (e) => alert("Error: " + e),
    onSuccess: () => {
      toast("Updated developer");
      queryClient.invalidateQueries({ queryKey: ["housingSocieties"] });
    },
  });
}

export function useDeleteHS() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["housingSocieties"],
    mutationFn: async (data: HousingSociety) => {
      const token = await getToken();
      if (token) return deleteHS(data, token);
    },
    onError: (e) => alert("Error: " + e),
    onSuccess: () => {
      toast("Deleted developer");
      queryClient.invalidateQueries({ queryKey: ["housingSocieties"] });
    },
  });
}
