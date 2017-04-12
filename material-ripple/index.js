/**
 * Bernd Wessels (https://github.com/BerndWessels/)
 *
 * Copyright © 2016 Bernd Wessels. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Import dependencies.
 */

/**
 * Import local dependencies.
 */

/**
 * Import styles.
 */
import '@material/ripple/mdc-ripple.scss';

/**
 * Export the ripple helper.
 */
export default (e) => {
  if (!e) {
    return '';
  }
  let dimensions = e.getBoundingClientRect();
  const maxDim = Math.max(dimensions.height, dimensions.width);
  const surfaceDiameter = Math.sqrt(Math.pow(dimensions.width, 2) + Math.pow(dimensions.height, 2));
  // 60% of the largest dimension of the surface
  const fgSize = maxDim * 0.6;
  // Diameter of the surface + 10px
  const maxRadius = surfaceDiameter + 10;
  const fgScale = maxRadius / fgSize;
  return {
    style: `--mdc-ripple-surface-width:${dimensions.width}px;
    --mdc-ripple-surface-height:${dimensions.height}px;
    --mdc-ripple-fg-size:${Math.round(fgSize)}px;
    --mdc-ripple-fg-scale:${fgScale};
    --mdc-ripple-left:${Math.round((dimensions.width / 2) - (fgSize / 2))}px;
    --mdc-ripple-top:${Math.round((dimensions.height / 2) - (fgSize / 2))}px;`,
    duration: 1000 * Math.sqrt(maxRadius / 1024)
  }
};
