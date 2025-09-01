# Open Source License filter

[Open-source licenses][1] filter algorithm library written in [TypeScript][2]

[![NPM Dependency](https://img.shields.io/librariesio/github/Open-Source-Bazaar/Open-Source-License-filter.svg)][3]
[![CI & CD](https://github.com/Open-Source-Bazaar/Open-Source-License-filter/actions/workflows/main.yml/badge.svg)][4]

[![NPM](https://nodei.co/npm/license-filter.png?downloads=true&downloadRank=true&stars=true)][5]

## Link

- Design document: https://open-source-bazaar.feishu.cn/wiki/VbYWwRLa2ioMvTkvR0acvjagn7b
- UI implement: https://bazaar.fcc-cd.dev/license-filter

## Usage

### Installation

```shell
npm i license-filter
```

### Evaluation

```typescript
import {
    FeatureAttitude,
    InfectionRange,
    filterLicenses
} from 'license-filter';

const list = filterLicenses({
    popularity: FeatureAttitude.Negative,
    reuseCondition: FeatureAttitude.Positive,
    infectionIntensity: FeatureAttitude.Positive,
    infectionRange: InfectionRange.Module,
    jurisdiction: FeatureAttitude.Undefined,
    patentStatement: FeatureAttitude.Positive,
    patentRetaliation: FeatureAttitude.Positive,
    enhancedAttribution: FeatureAttitude.Positive,
    privacyLoophole: FeatureAttitude.Negative,
    marketingEndorsement: FeatureAttitude.Negative
});

console.log(list); // filtered licenses
```

## Design

### Evaluation Dimension

1. Popularity
2. Reuse Condition
3. Infection Intensity
4. Infection Range
5. Jurisdiction
6. Patent Statement
7. Patent Retaliation
8. Enhanced Attribution
9. Privacy Loophole
10. Marketing Endorsement

### Filter Algorithm

1. Mark the weight of various Open-source licenses according to the above Evaluation dimensions:
    1. Positive `+1`: clearly supports the feature of this dimension
    2. Undefined `0`: no explicit mention of the dimension's feature
    3. Negative `-1`: clearly oppose the characteristics of this dimension

2. Input the user's Attitude towards the above dimensional features:
    1. Positive `+1`: definitely need the feature of this dimension
    2. Undefined `0`: insensitive to the feature of this dimension
    3. Negative `-1`: explicitly reject the feature of this dimension

3. Calculate each license by the following formula:

    > Total weight per license = Dimension weight item x Dimension user attitude value

4. All licenses are ranked in reverse order of the total weight in this screening, which is the result

## Project History

### Original

http://oss-watch.ac.uk/apps/licdiff/

### Old Chinese Edition

#### Entry

https://kaiyuanshe.cn/license-tool/

#### Code

- Page: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/hexo/themes/Electron/layout/license-tool.ejs
- Logic: https://github.com/kaiyuanshe/kaiyuanshe.github.io/tree/hexo/themes%2FElectron%2Fsource%2FOSLS

### New Chinese Edition

#### Pre-research

https://github.com/luojiyin1987/license-tool

## Reference

### Standard data

1. https://opensource.org/licenses
2. https://spdx.org/licenses/
3. https://tldrlegal.com/licenses/browse

### Theoretical research

https://mp.weixin.qq.com/s/ja_w-2NNSIKcO4vv7iN5vg

### Open-source project

1. https://github.com/ufal/public-license-selector/
2. https://github.com/hernanmd/license-selector
3. https://github.com/creativecommons/cc-license-chooser

[1]: https://opensource.org/licenses
[2]: https://www.typescriptlang.org/
[3]: https://libraries.io/npm/license-filter
[4]: https://github.com/Open-Source-Bazaar/Open-Source-License-filter/actions/workflows/main.yml
[5]: https://nodei.co/npm/license-filter/
