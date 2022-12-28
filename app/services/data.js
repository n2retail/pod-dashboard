import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'ember-get-config';

const { dataRoot } = config;

export default class DataService extends Service {
  @tracked data;

  async load() {
    if (this.data) return;

    let res = await fetch(`${dataRoot}data.json`);
    this.data = await res.json();
  }

  getPodInfoForPath(path, childNode) {
    let pathNode = childNode ?? this.data.appResults;

    if (path === pathNode.path) {
      return pathNode;
    }

    return pathNode.children?.find((node) =>
      this.getPodInfoForPath(path, node)
    );
  }
}
