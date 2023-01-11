import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ComponentRoute extends Route {
  @service('data') dataService;
  @service('router') router;

  queryParams = {
    path: {
      refreshModel: true,
    },
  };

  model({ path }) {
    let fullPath = `app/pods/components/${path}`;

    return this.router.replaceWith('component', {
      queryParams: { path: fullPath },
    });
  }
}
