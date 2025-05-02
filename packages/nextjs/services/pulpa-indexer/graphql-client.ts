const ENDPOINT = "https://poktapok-indexer-production.up.railway.app/";

interface FetchGraphQLArgs {
  query: string;
  variables?: Record<string, unknown>;
}

interface FetchGraphQLResult<T> {
  data?: T;
  error?: string;
}

export async function fetchGraphQL<T>({ query, variables }: FetchGraphQLArgs): Promise<FetchGraphQLResult<T>> {
  if (!query) return { error: "No GraphQL query provided." };

  let response: Response;
  try {
    response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
  } catch (err) {
    return { error: "Network error connecting to Poktapok indexer." };
  }

  if (!response.ok) return { error: `Poktapok indexer error: ${response.statusText}` };

  let json: any;
  try {
    json = await response.json();
  } catch {
    return { error: "Invalid JSON response from Poktapok indexer." };
  }

  if (json.errors?.length) return { error: json.errors[0].message || "GraphQL error." };
  if (!json.data) return { error: "No data returned from Poktapok indexer." };

  return { data: json.data };
}

// Example usage for leaderboard query
export async function fetchLeaderboard(): Promise<
  FetchGraphQLResult<{ pulpaAccounts: { items: { address: string; balance: string }[] } }>
> {
  const query = `
    query PulpaLeaderboard {
      pulpaAccounts(orderDirection: "desc", orderBy: "balance") {
        items {
          address
          balance
        }
      }
    }
  `;
  return fetchGraphQL({ query });
}
