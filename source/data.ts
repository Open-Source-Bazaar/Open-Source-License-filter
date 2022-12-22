import { FeatureAttitude, InfectionRange, License } from './type';

export const licenses: License[] =[
    {
      key: 'AFL 3.0',
      name: 'Academic Free License 3.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Adaptive Public License',
      name: 'Adaptive Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.Module,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Positive,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'AGPL',
      name: 'Affero GNU Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Positive,
        privacyLoophole: FeatureAttitude.Positive,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Apache License 2.0',
      name: 'Apache License 2.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Artistic License 2.0',
      name: 'Artistic License 2.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Attribution Assurance Licenses',
      name: 'Attribution Assurance Licenses',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Positive,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'BSL1.0',
      name: 'Boost Software License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'CDDL',
      name: 'Common Development and Distribution License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'CPAL',
      name: 'Common Public Attribution License FeatureAttitude.Positive.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.Module,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Positive,
        privacyLoophole: FeatureAttitude.Positive,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Common Public License FeatureAttitude.Positive.0',
      name: 'Common Public License FeatureAttitude.Positive.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'EPL',
      name: 'Eclipse Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'ECL',
      name: 'Educational Community License Version 2.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Eiffel Forum License v2.0',
      name: 'Eiffel Forum License v2.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'EUPL',
      name: 'European Union Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Fair License',
      name: 'Fair License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'GPL',
      name: 'GNU General Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'GPLv3',
      name: 'GNU General Public License v3.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'LGPL',
      name: "GNU Library or 'Lesser' General Public License",
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.Library,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'LGPLv3',
      name: "GNU Library or 'Lesser' General Public License v3.0",
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.Library,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Historical Permission Notice and Disclaimer',
      name: 'Historical Permission Notice and Disclaimer',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'IPA Font License',
      name: 'IPA Font License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Positive
      }
    },
    {
      key: 'ISC License',
      name: 'ISC License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Lucent Public License Version FeatureAttitude.Positive.02',
      name: 'Lucent Public License Version FeatureAttitude.Positive.02',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Ms-PL',
      name: 'Microsoft Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Ms-RL',
      name: 'Microsoft Reciprocal License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.Module,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'MirOS License',
      name: 'MirOS License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Positive
      }
    },
    {
      key: 'MIT license',
      name: 'MIT license',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'MPL',
      name: 'Mozilla Public License FeatureAttitude.Positive.FeatureAttitude.Positive',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.Module,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'NASA Open Source Agreement FeatureAttitude.Positive.3',
      name: 'NASA Open Source Agreement FeatureAttitude.Positive.3',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Positive
      }
    },
    {
      key: 'BSD',
      name: 'New and Simplified BSD licenses',
      link: '',
      feature: {
        popularity: FeatureAttitude.Positive,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Non-Profit OSL 3.0',
      name: 'Non-Profit Open Software License 3.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'NTP License',
      name: 'NTP License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'OFL FeatureAttitude.Positive.FeatureAttitude.Positive',
      name: 'Open Font License FeatureAttitude.Positive.FeatureAttitude.Positive',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Positive
      }
    },
    {
      key: 'Open Group Test Suite License',
      name: 'Open Group Test Suite License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Positive
      }
    },
    {
      key: 'OSL 3.0',
      name: 'Open Software License 3.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'QPL',
      name: 'Qt Public License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'RPL1.5',
      name: 'Reciprocal Public License FeatureAttitude.Positive.5',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Positive,
        patentStatement: FeatureAttitude.Positive,
        patentRetaliation: FeatureAttitude.Positive,
        enhancedAttribution: FeatureAttitude.Positive,
        privacyLoophole: FeatureAttitude.Positive,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'Simple Public License 2.0',
      name: 'Simple Public License 2.0',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Positive,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'University of Illinois/NCSA Open Source License',
      name: 'University of Illinois/NCSA Open Source License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    },
    {
      key: 'X.Net License',
      name: 'X.Net License',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Positive,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Positive
      }
    },
    {
      key: 'zlib/libpng license',
      name: 'zlib/libpng license',
      link: '',
      feature: {
        popularity: FeatureAttitude.Negative,
        reuseCondition: FeatureAttitude.Negative,
        infectionIntensity: FeatureAttitude.Negative,
        infectionRange: InfectionRange.File,
        jurisdiction: FeatureAttitude.Negative,
        patentStatement: FeatureAttitude.Negative,
        patentRetaliation: FeatureAttitude.Negative,
        enhancedAttribution: FeatureAttitude.Negative,
        privacyLoophole: FeatureAttitude.Negative,
        marketingEndorsement: FeatureAttitude.Negative
      }
    }
  ];
  