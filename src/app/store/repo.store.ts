import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Repo } from "../interfaces/repo.inter";
import { GitService } from "../services/git-service";

const initialState: Repo = {
  totalCount: 0,
  nodes: [],
};

export const RepoStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods((store, gitService = inject(GitService)) => ({
    async loadAll() {
      const response = await gitService.loadAllRepositories();
      patchState(store, { nodes: response.nodes, totalCount: response.totalCount });
    },
  }))
);
