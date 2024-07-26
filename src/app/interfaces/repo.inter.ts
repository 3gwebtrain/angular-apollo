export type RepoNode = {
  nameWithOwner: string;
  stars: number;
};

export type Repo = {
  totalCount: number;
  nodes: RepoNode[];
  user: RepoNode;
};

export type RepoResponse = {
  data: {
    user: {
      repositories: Repo[];
    };
  };
};
