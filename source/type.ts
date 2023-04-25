export enum FeatureAttitude {
    Positive = 1,
    Undefined = 0,
    Negative = -1
}

export enum InfectionRange {
    Library,
    File,
    Module
}

export interface FeatureEvaluation
    extends Record<
        | 'popularity'
        | 'reuseCondition'
        | 'infectionIntensity'
        | 'jurisdiction'
        | 'patentStatement'
        | 'patentRetaliation'
        | 'enhancedAttribution'
        | 'privacyLoophole'
        | 'marketingEndorsement',
        FeatureAttitude
    > {
    infectionRange?: InfectionRange;
}

export interface License {
    key: string;
    name: string;
    link: string;
    feature: FeatureEvaluation;
}
