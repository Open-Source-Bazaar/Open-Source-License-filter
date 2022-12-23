import { FeatureAttitude, InfectionRange, License } from './type';

export const licenses: License[] = [
    {
        key: 'AFL-3.0',
        name: 'Academic Free License 3.0',
        link: 'https://opensource.org/licenses/AFL-3.0',
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
        key: 'APL',
        name: 'Adaptive Public License',
        link: 'https://opensource.org/licenses/APL-1.0',
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
        link: 'https://www.gnu.org/licenses/agpl-3.0.en.html',
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
        link: 'https://www.apache.org/licenses/LICENSE-2.0',
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
        key: 'Artistic-2.0',
        name: 'Artistic License 2.0',
        link: 'https://opensource.org/licenses/Artistic-2.0',
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
        key: 'AAL',
        name: 'Attribution Assurance Licenses',
        link: 'https://opensource.org/licenses/AAL',
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
        link: 'https://www.boost.org/users/license.html',
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
        link: 'https://opensource.org/licenses/CDDL-1.0',
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
        name: 'Common Public Attribution License 1.0',
        link: 'https://opensource.org/licenses/CPAL-1.0',
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
        key: 'CPL-1.0',
        name: 'Common Public License 1.0',
        link: 'https://opensource.org/licenses/cpl1.0.php',
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
        link: 'https://www.eclipse.org/legal/epl-2.0/',
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
        link: 'https://opensource.org/licenses/ECL-2.0',
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
        key: 'EFL-2.0',
        name: 'Eiffel Forum License v2.0',
        link: 'https://opensource.org/licenses/EFL-2.0',
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
        link: 'https://joinup.ec.europa.eu/collection/eupl/introduction-eupl-licence',
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
        key: 'Fair',
        name: 'Fair License',
        link: 'https://opensource.org/licenses/Fair',
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
        link: 'https://www.gnu.org/licenses/old-licenses/gpl-1.0.html',
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
        link: 'https://www.gnu.org/licenses/gpl-3.0.html',
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
        link: 'https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html',
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
        link: 'https://www.gnu.org/licenses/lgpl-3.0.en.html',
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
        key: 'HPND',
        name: 'Historical Permission Notice and Disclaimer',
        link: 'https://opensource.org/licenses/HPND',
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
        key: 'IPA',
        name: 'IPA Font License',
        link: 'https://opensource.org/licenses/IPA',
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
        key: 'ISC',
        name: 'ISC License',
        link: 'https://opensource.org/licenses/ISC',
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
        key: 'LPL-1.02',
        name: 'Lucent Public License Version 1.02',
        link: 'https://opensource.org/licenses/LPL-1.02',
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
        key: 'MS-PL',
        name: 'Microsoft Public License',
        link: 'https://opensource.org/licenses/MS-PL',
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
        key: 'MS-RL',
        name: 'Microsoft Reciprocal License',
        link: 'https://opensource.org/licenses/MS-RL',
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
        key: 'MirOS',
        name: 'MirOS License',
        link: 'https://opensource.org/licenses/MirOS',
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
        key: 'MIT',
        name: 'MIT license',
        link: 'https://opensource.org/licenses/MIT',
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
        name: 'Mozilla Public License 1.1',
        link: 'https://www.mozilla.org/en-US/MPL/1.1/',
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
        key: 'NASA-1.3',
        name: 'NASA Open Source Agreement 1.3',
        link: 'https://opensource.org/licenses/NASA-1.3',
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
        link: 'https://opensource.org/licenses/BSD-3-Clause',
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
        key: 'NPOSL-3.0',
        name: 'Non-Profit Open Software License 3.0',
        link: 'https://opensource.org/licenses/NPOSL-3.0',
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
        key: 'NTP',
        name: 'NTP License',
        link: 'https://opensource.org/licenses/NTP',
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
        key: 'OFL-1.1',
        name: 'Open Font License 1.1',
        link: 'https://opensource.org/licenses/OFL-1.1',
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
        key: 'OGTSL',
        name: 'Open Group Test Suite License',
        link: 'https://opensource.org/licenses/OGTSL',
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
        key: 'OSL-3.0',
        name: 'Open Software License 3.0',
        link: 'https://opensource.org/licenses/OSL-3.0',
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
        link: 'https://opensource.org/licenses/QPL-1.0',
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
        key: 'RPL-1.5',
        name: 'Reciprocal Public License 1.5',
        link: 'https://spdx.org/licenses/RPL-1.5.html',
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
        key: 'SimPL-2.0',
        name: 'Simple Public License 2.0',
        link: 'https://opensource.org/licenses/Simple-2.0',
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
        key: 'NCSA',
        name: 'University of Illinois/NCSA Open Source License',
        link: 'https://opensource.org/licenses/NCSA',
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
        key: 'Xnet',
        name: 'X.Net License',
        link: 'https://opensource.org/licenses/xnet.php',
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
        key: 'Zlib',
        name: 'zlib/libpng license',
        link: 'https://opensource.org/licenses/Zlib',
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
