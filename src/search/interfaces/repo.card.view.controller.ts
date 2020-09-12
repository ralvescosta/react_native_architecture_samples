import {useState, useContext} from 'react';
import {SniffedRepositoriesContext} from '../../core/context/sniffed.repositories.context';

import {ResultSearchGithubRepositoryEntity} from '../bussiness/entities/result.search.github.repository.entity';

import {ISaveRepositoryToSnifferUsecase} from '../bussiness/usecases/isave.repositrory.to.sniffer.usecase';

export class RepoCardViewController {
  public switchState: boolean;
  public setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;

  public loading: boolean;
  public setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public context = useContext(SniffedRepositoriesContext);

  constructor(
    private readonly repository: ResultSearchGithubRepositoryEntity,
    private readonly saveToSnifferUsecase: ISaveRepositoryToSnifferUsecase,
  ) {
    [this.switchState, this.setSwitchState] = useState<boolean>(this.repository.checked);
    [this.loading, this.setLoading] = useState<boolean>(false);
  }

  public async saveRepoToObserver() {
    this.setLoading(true);
    try {
      const sniffed = await this.saveToSnifferUsecase.saveToSniffer(this.repository);
      this.context.setSniffedRepositories([...this.context.sniffedRepositories, sniffed]);
      this.setSwitchState(true);
    } catch (err) {}
    this.setLoading(false);
  }
}