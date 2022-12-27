import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PodInfoRoute extends Route {
  @service('data') dataService;

  queryParams = {
    path: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    await this.dataService.load();
  }

  model({ path }) {
    return {
      podInfo: this.dataService.getPodInfoForPath(path),
    };
  }
}
