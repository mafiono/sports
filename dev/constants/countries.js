let countries = {
        "AU": "Australia",
        "AD": "Andorra",
        "AE": "UAE",
        "AF": "Afghanistan",
        "AG": "Antigua and Barbuda",
        "AL": "Albania",
        "AM": "Armenia",
        "AO": "Angola",
        "AR": "Argentina",
        "AS": "American Samoa",
        "AT": "Austria",
        "AW": "Aruba",
        "AZ": "Azerbaijan",
        "BA": "Bosnia and Herzegovina",
        "BB": "Barbados",
        "BD": "Bangladesh",
        "BE": "Belgium",
        "BF": "Burkina Faso",
        "BG": "Bulgaria",
        "BH": "Bahrain",
        "BI": "Burundi",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BN": "Brunei",
        "BO": "Bolivia",
        "BR": "Brazil",
        "BS": "Bahamas",
        "BT": "Bhutan",
        "BW": "Botswana",
        "BY": "Belarus",
        "BZ": "Belize",
        "CA": "Canada",
        "CD": "Central African Republic",
        "CF": "Central African Republic",
        "CG": "Republic of the Congo",
        "CH": "Switzerland",
        "CI": "Cote d'Ivoire",
        "CK": "Cook Islands",
        "CL": "Chile",
        "CM": "Cameroon",
        "CN": "China",
        "CO": "Colombia",
        "CR": "Costa Rica",
        "CU": "Cuba",
        "CV": "Cape Verde",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DE": "Germany",
        "DJ": "Djibouti",
        "DK": "Denmark",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "DZ": "Algeria",
        "EC": "Ecuador",
        "EE": "Estonia",
        "EG": "Egypt",
        "ER": "Eritrea",
        "ES": "Spain",
        "ET": "Ethiopia",
        "FI": "Finland",
        "FJ": "Fiji",
        "FM": "Federated States of Micronesia",
        "FO": "Faroe Islands",
        "GA": "Gabon",
        "GD": "Grenada",
        "GE": "Georgia",
        "GH": "Ghana",
        "GM": "Gambia",
        "GN": "Guinea",
        "GQ": "Equatorial Guinea",
        "GR": "Greece",
        "GT": "Guatemala",
        "GU": "Guam",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HK": "Hong Kong",
        "HN": "Honduras",
        "HR": "Croatia",
        "HT": "Republic of Haiti",
        "HU": "Hungary",
        "ID": "Indonesia",
        "IE": "Ireland",
        "IL": "Israel",
        "IN": "India",
        "IQ": "Iraq",
        "IR": "Iran",
        "IS": "Iceland",
        "IT": "Italy",
        "JM": "Jamaica",
        "JO": "Jordan",
        "JP": "Japan",
        "KE": "Kenya",
        "KG": "Kyrgyzstan",
        "KH": "Cambodia",
        "KI": "Kiribati",
        "KM": "Comoros",
        "KN": "Saint Kitts and Nevis",
        "KP": "DPRK",
        "KR": "South Korea",
        "KW": "Kuwait",
        "KY": "Cayman Islands",
        "KZ": "Kazakhstan",
        "LA": "Laos",
        "LB": "Lebanon",
        "LC": "Saint Lucia",
        "LI": "Liechtenstein",
        "LK": "Sri Lanka",
        "LR": "Liberia",
        "LS": "Lesotho",
        "LT": "Lithuania",
        "LU": "Luxemburg",
        "LV": "Latvia",
        "LY": "Libya",
        "MA": "Morocco",
        "MC": "Monaco",
        "MD": "Moldavia",
        "ME": "Montenegro",
        "MG": "Madagascar",
        "MK": "Macedonia",
        "ML": "Mali",
        "MM": "Myanmar",
        "MN": "Mongolia",
        "MR": "Mauritania",
        "MT": "Malta",
        "MU": "Mauritius",
        "MV": "Maldives",
        "MW": "Malawi",
        "MX": "Mexico",
        "MY": "Malaysia",
        "MZ": "Mozambique",
        "NA": "Namibia",
        "NE": "Niger",
        "NG": "Nigeria",
        "NI": "Nicaragua",
        "NL": "Netherlands",
        "NO": "Norway",
        "NP": "Nepal",
        "NR": "Nauru",
        "NZ": "New Zealand",
        "OM": "Oman",
        "PA": "Panama",
        "PE": "Peru",
        "PG": "Papua New Guinea",
        "PH": "Philippines",
        "PK": "Pakistan",
        "PL": "Poland",
        "PR": "Puerto Rico",
        "PS": "Palestine",
        "PT": "Portugal",
        "PW": "Palau",
        "PY": "Paraguay",
        "QA": "Qatar",
        "RO": "Romania",
        "RS": "Serbia",
        "RU": "Russia",
        "RW": "Rwanda",
        "SA": "Saudi Arabia",
        "SB": "Solomon Islands",
        "SC": "Seychelles",
        "SD": "Sudan",
        "SE": "Sweden",
        "SG": "Singapore",
        "SI": "Slovenia",
        "SK": "Slovakia",
        "SL": "Sierra Leone",
        "SM": "San Marino",
        "SN": "Senegal",
        "SO": "Somalia",
        "SR": "Republic of Suriname",
        "ST": "Sao Tome and Principe",
        "SV": "Salvador",
        "SY": "Syria",
        "SZ": "Swaziland",
        "TD": ("Chad"),
        "TG": ("Togo"),
        "TH": "Thailand",
        "TJ": "Tadjikistan",
        "TL": "Timor-Leste",
        "TM": "Turkmenistan",
        "TN": "Tunisia",
        "TO": "Tonga",
        "TR": "Turkey",
        "TT": "Trinidad and Tobago",
        "TV": "Tuvalu",
        "TW": "Taiwan",
        "TZ": "Tanzania",
        "UA": "Ukraine",
        "UG": "Uganda",
        "GB": "United Kingdom",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VC": "Saint Vincent and the Grenadines",
        "VE": "Venezuela",
        "VG": "British Virgin Islands",
        "VI": "United States Virgin Islands",
        "VN": "Vietnam",
        "VU": "Vanuatu",
        "WS": "Samoa",
        "YE": "Yemen",
        "ZA": "Republic of South Africa",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    },
    iso2Wrapped = [];

for (let country in countries) {
    iso2Wrapped.push({
        iso: country,
        name: countries[country]
    });
}

export default {
    list: iso2Wrapped,
    countries: countries
};