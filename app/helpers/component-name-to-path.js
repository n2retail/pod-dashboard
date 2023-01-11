import { helper } from '@ember/component/helper';
import { kebabCase } from 'lodash';

export default helper(function componentNameToPath(
  [componentName] /*, named*/
) {
  let segments = componentName.split('::');

  let path = segments.map(kebabCase).join('/');

  return `app/pods/components/${path}`;
});
