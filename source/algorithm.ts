import { FeatureEvaluation } from './type';
import { licenses } from './data';

export const filterLicenses = (
    attitude: Partial<FeatureEvaluation>,
    licenseList = licenses
) =>
    licenseList
        .map(license => {
            const { infectionRange = 0, ...feature } = license.feature;

            const score =
                Object.entries(feature).reduce(
                    (sum, [key, value]) => sum + value * (attitude[key] || 0),
                    0
                ) + +(infectionRange === attitude.infectionRange);

            return { license, score };
        })
        .sort(({ score: a }, { score: b }) => b - a);
