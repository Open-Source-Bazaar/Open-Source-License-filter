import {
    FeatureAttitude,
    InfectionRange,
    licenses,
    filterLicenses
} from '../source';

describe('Algorithm', () => {
    it('should return a Filtered Array with License & Score, which sorted by Score', () => {
        const attitude = {
            popularity: FeatureAttitude.Negative,
            reuseCondition: FeatureAttitude.Positive,
            infectionIntensity: FeatureAttitude.Positive,
            infectionRange: InfectionRange.Module,
            jurisdiction: FeatureAttitude.Undefined,
            patentStatement: FeatureAttitude.Positive,
            patentRetaliation: FeatureAttitude.Positive,
            enhancedAttribution: FeatureAttitude.Positive,
            privacyLoophole: FeatureAttitude.Positive,
            marketingEndorsement: FeatureAttitude.Negative
        };
        const list = filterLicenses(attitude, licenses);
        const featureKeys = Object.keys(licenses[0].feature);
        let lastScore = Infinity;

        for (const { license, score } of list) {
            expect(
                Object.keys(license.feature).filter(
                    key => key !== 'infectionRange'
                )
            ).toEqual(featureKeys);

            expect(score <= lastScore).toBeTruthy();

            lastScore = score;
        }
    });
});
