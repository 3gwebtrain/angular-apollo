import { RepoNode } from "../interfaces/repo.inter";

export function dataFetch(data: any): RepoNode[] {
  const tableData = data.map((d: any) => ({ nameWithOwner: d.nameWithOwner, stars: d.stargazers.totalCount }));
  return tableData;
}
