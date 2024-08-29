import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./routers";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, refetchOnWindowFocus: false },
      mutations: { retry: false },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}
