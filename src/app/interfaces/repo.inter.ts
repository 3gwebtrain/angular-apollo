export type RepoNode = {
  nameWithOwner: string;
  stargazers: {
    totalCount: number;
  };
};

export type Repo = {
  repositories: {
    totalCount: number;
    nodes: RepoNode[];
  };
};
