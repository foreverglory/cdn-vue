/* 
 * This file is part of the current project.
 * 
 * (c) ForeverGlory <http://foreverglory.me/>
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class CDN {
  options = {
    url: ''
  };
  constructor(options = {}) {
    Object.assign(this.options, options);
  }
  get(path) {
    if (path === undefined) {
      return undefined;
    }
    if (path.indexOf('http://') === 0 || path.indexOf('https://') === 0) {
      return path;
    } else if (path.indexOf('public://') === 0) {
      return this.options.public + path.slice(8);
    }
    return this.options.url + path;
  }
}
export default function install(Vue, url) {
  let cdn = new CDN(url);
  Object.defineProperty(Vue.prototype, '$cdn', {
    get() {
      return cdn;
    }
  });
  Vue.filter('cdn', function (path) {
    return cdn.get(path);
  });
};
