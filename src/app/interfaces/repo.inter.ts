export type RepoNode = {
  nameWithOwner: string;
  stars: number;
};

export type Repo = {
  totalCount: number;
  nodes: RepoNode[];
};

export type RepoResponse = {
  data: {
    user: {
      repositories: Repo[];
    };
  };
};
