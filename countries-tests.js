if (Meteor.isClient) {

  var countryList = _.pluck(Countries(), 'name');

  Tinytest.add("Countries - count", function (test) {
    test.equal(countryList.length, 206);
  });

  Tinytest.add("countryList - Afghanistan", function (test) {
    test.include(countryList, "Afghanistan");
  });

  Tinytest.add("countryList - Albania", function (test) {
    test.include(countryList, "Albania");
  });

  Tinytest.add("countryList - Algeria", function (test) {
    test.include(countryList, "Algeria");
  });

  Tinytest.add("countryList - Andorra", function (test) {
    test.include(countryList, "Andorra");
  });

  Tinytest.add("countryList - Angola", function (test) {
    test.include(countryList, "Angola");
  });

  Tinytest.add("countryList - Antigua and Barbuda", function (test) {
    test.include(countryList, "Antigua and Barbuda");
  });

  Tinytest.add("countryList - Argentina", function (test) {
    test.include(countryList, "Argentina");
  });

  Tinytest.add("countryList - Armenia", function (test) {
    test.include(countryList, "Armenia");
  });

  Tinytest.add("countryList - Aruba", function (test) {
    test.include(countryList, "Aruba");
  });

  Tinytest.add("countryList - Australia", function (test) {
    test.include(countryList, "Australia");
  });

  Tinytest.add("countryList - Austria", function (test) {
    test.include(countryList, "Austria");
  });

  Tinytest.add("countryList - Azerbaijan", function (test) {
    test.include(countryList, "Azerbaijan");
  });

  Tinytest.add("countryList - Bahamas, The", function (test) {
    test.include(countryList, "Bahamas, The");
  });

  Tinytest.add("countryList - Bahrain", function (test) {
    test.include(countryList, "Bahrain");
  });

  Tinytest.add("countryList - Bangladesh", function (test) {
    test.include(countryList, "Bangladesh");
  });

  Tinytest.add("countryList - Barbados", function (test) {
    test.include(countryList, "Barbados");
  });

  Tinytest.add("countryList - Belarus", function (test) {
    test.include(countryList, "Belarus");
  });

  Tinytest.add("countryList - Belgium", function (test) {
    test.include(countryList, "Belgium");
  });

  Tinytest.add("countryList - Belize", function (test) {
    test.include(countryList, "Belize");
  });

  Tinytest.add("countryList - Benin", function (test) {
    test.include(countryList, "Benin");
  });

  Tinytest.add("countryList - Bhutan", function (test) {
    test.include(countryList, "Bhutan");
  });

  Tinytest.add("countryList - Bolivia", function (test) {
    test.include(countryList, "Bolivia");
  });

  Tinytest.add("countryList - Bosnia and Herzegovina", function (test) {
    test.include(countryList, "Bosnia and Herzegovina");
  });

  Tinytest.add("countryList - Botswana", function (test) {
    test.include(countryList, "Botswana");
  });

  Tinytest.add("countryList - Brazil", function (test) {
    test.include(countryList, "Brazil");
  });

  Tinytest.add("countryList - Brunei", function (test) {
    test.include(countryList, "Brunei");
  });

  Tinytest.add("countryList - Bulgaria", function (test) {
    test.include(countryList, "Bulgaria");
  });

  Tinytest.add("countryList - Burkina Faso", function (test) {
    test.include(countryList, "Burkina Faso");
  });

  Tinytest.add("countryList - Burma", function (test) {
    test.include(countryList, "Burma");
  });

  Tinytest.add("countryList - Burundi", function (test) {
    test.include(countryList, "Burundi");
  });

  Tinytest.add("countryList - Cambodia", function (test) {
    test.include(countryList, "Cambodia");
  });

  Tinytest.add("countryList - Cameroon", function (test) {
    test.include(countryList, "Cameroon");
  });

  Tinytest.add("countryList - Canada", function (test) {
    test.include(countryList, "Canada");
  });

  Tinytest.add("countryList - Cape Verde", function (test) {
    test.include(countryList, "Cape Verde");
  });

  Tinytest.add("countryList - Central African Republic", function (test) {
    test.include(countryList, "Central African Republic");
  });

  Tinytest.add("countryList - Chad", function (test) {
    test.include(countryList, "Chad");
  });

  Tinytest.add("countryList - Chile", function (test) {
    test.include(countryList, "Chile");
  });

  Tinytest.add("countryList - China", function (test) {
    test.include(countryList, "China");
  });

  Tinytest.add("countryList - Colombia", function (test) {
    test.include(countryList, "Colombia");
  });

  Tinytest.add("countryList - Comoros", function (test) {
    test.include(countryList, "Comoros");
  });

  Tinytest.add("countryList - Congo, Democratic Republic of the", function (test) {
    test.include(countryList, "Congo, Democratic Republic of the");
  });

  Tinytest.add("countryList - Congo, Republic of the", function (test) {
    test.include(countryList, "Congo, Republic of the");
  });

  Tinytest.add("countryList - Costa Rica", function (test) {
    test.include(countryList, "Costa Rica");
  });

  Tinytest.add("countryList - Cote d'Ivoire", function (test) {
    test.include(countryList, "Cote d'Ivoire");
  });

  Tinytest.add("countryList - Croatia", function (test) {
    test.include(countryList, "Croatia");
  });

  Tinytest.add("countryList - Cuba", function (test) {
    test.include(countryList, "Cuba");
  });

  Tinytest.add("countryList - Curacao", function (test) {
    test.include(countryList, "Curacao");
  });

  Tinytest.add("countryList - Cyprus", function (test) {
    test.include(countryList, "Cyprus");
  });

  Tinytest.add("countryList - Czech Republic", function (test) {
    test.include(countryList, "Czech Republic");
  });

  Tinytest.add("countryList - Denmark", function (test) {
    test.include(countryList, "Denmark");
  });

  Tinytest.add("countryList - Djibouti", function (test) {
    test.include(countryList, "Djibouti");
  });

  Tinytest.add("countryList - Dominica", function (test) {
    test.include(countryList, "Dominica");
  });

  Tinytest.add("countryList - Dominican Republic", function (test) {
    test.include(countryList, "Dominican Republic");
  });

  Tinytest.add("countryList - East Timor (see Timor-Leste)", function (test) {
    test.include(countryList, "East Timor (see Timor-Leste)");
  });

  Tinytest.add("countryList - Ecuador", function (test) {
    test.include(countryList, "Ecuador");
  });

  Tinytest.add("countryList - Egypt", function (test) {
    test.include(countryList, "Egypt");
  });

  Tinytest.add("countryList - El Salvador", function (test) {
    test.include(countryList, "El Salvador");
  });

  Tinytest.add("countryList - Equatorial Guinea", function (test) {
    test.include(countryList, "Equatorial Guinea");
  });

  Tinytest.add("countryList - Eritrea", function (test) {
    test.include(countryList, "Eritrea");
  });

  Tinytest.add("countryList - Estonia", function (test) {
    test.include(countryList, "Estonia");
  });

  Tinytest.add("countryList - Ethiopia", function (test) {
    test.include(countryList, "Ethiopia");
  });

  Tinytest.add("countryList - Fiji", function (test) {
    test.include(countryList, "Fiji");
  });

  Tinytest.add("countryList - Finland", function (test) {
    test.include(countryList, "Finland");
  });

  Tinytest.add("countryList - France", function (test) {
    test.include(countryList, "France");
  });

  Tinytest.add("countryList - Gabon", function (test) {
    test.include(countryList, "Gabon");
  });

  Tinytest.add("countryList - Gambia, The", function (test) {
    test.include(countryList, "Gambia, The");
  });

  Tinytest.add("countryList - Georgia", function (test) {
    test.include(countryList, "Georgia");
  });

  Tinytest.add("countryList - Germany", function (test) {
    test.include(countryList, "Germany");
  });

  Tinytest.add("countryList - Ghana", function (test) {
    test.include(countryList, "Ghana");
  });

  Tinytest.add("countryList - Greece", function (test) {
    test.include(countryList, "Greece");
  });

  Tinytest.add("countryList - Grenada", function (test) {
    test.include(countryList, "Grenada");
  });

  Tinytest.add("countryList - Guatemala", function (test) {
    test.include(countryList, "Guatemala");
  });

  Tinytest.add("countryList - Guinea", function (test) {
    test.include(countryList, "Guinea");
  });

  Tinytest.add("countryList - Guinea-Bissau", function (test) {
    test.include(countryList, "Guinea-Bissau");
  });

  Tinytest.add("countryList - Guyana", function (test) {
    test.include(countryList, "Guyana");
  });

  Tinytest.add("countryList - Haiti", function (test) {
    test.include(countryList, "Haiti");
  });

  Tinytest.add("countryList - Holy See", function (test) {
    test.include(countryList, "Holy See");
  });

  Tinytest.add("countryList - Honduras", function (test) {
    test.include(countryList, "Honduras");
  });

  Tinytest.add("countryList - Hong Kong", function (test) {
    test.include(countryList, "Hong Kong");
  });

  Tinytest.add("countryList - Hungary", function (test) {
    test.include(countryList, "Hungary");
  });

  Tinytest.add("countryList - Iceland", function (test) {
    test.include(countryList, "Iceland");
  });

  Tinytest.add("countryList - India", function (test) {
    test.include(countryList, "India");
  });

  Tinytest.add("countryList - Indonesia", function (test) {
    test.include(countryList, "Indonesia");
  });

  Tinytest.add("countryList - Iran", function (test) {
    test.include(countryList, "Iran");
  });

  Tinytest.add("countryList - Iraq", function (test) {
    test.include(countryList, "Iraq");
  });

  Tinytest.add("countryList - Ireland", function (test) {
    test.include(countryList, "Ireland");
  });

  Tinytest.add("countryList - Israel", function (test) {
    test.include(countryList, "Israel");
  });

  Tinytest.add("countryList - Italy", function (test) {
    test.include(countryList, "Italy");
  });

  Tinytest.add("countryList - Jamaica", function (test) {
    test.include(countryList, "Jamaica");
  });

  Tinytest.add("countryList - Japan", function (test) {
    test.include(countryList, "Japan");
  });

  Tinytest.add("countryList - Jordan", function (test) {
    test.include(countryList, "Jordan");
  });

  Tinytest.add("countryList - Kazakhstan", function (test) {
    test.include(countryList, "Kazakhstan");
  });

  Tinytest.add("countryList - Kenya", function (test) {
    test.include(countryList, "Kenya");
  });

  Tinytest.add("countryList - Kiribati", function (test) {
    test.include(countryList, "Kiribati");
  });

  Tinytest.add("countryList - Korea, North", function (test) {
    test.include(countryList, "Korea, North");
  });

  Tinytest.add("countryList - Korea, South", function (test) {
    test.include(countryList, "Korea, South");
  });

  Tinytest.add("countryList - Kosovo", function (test) {
    test.include(countryList, "Kosovo");
  });

  Tinytest.add("countryList - Kuwait", function (test) {
    test.include(countryList, "Kuwait");
  });

  Tinytest.add("countryList - Kyrgyzstan", function (test) {
    test.include(countryList, "Kyrgyzstan");
  });

  Tinytest.add("countryList - Laos", function (test) {
    test.include(countryList, "Laos");
  });

  Tinytest.add("countryList - Latvia", function (test) {
    test.include(countryList, "Latvia");
  });

  Tinytest.add("countryList - Lebanon", function (test) {
    test.include(countryList, "Lebanon");
  });

  Tinytest.add("countryList - Lesotho", function (test) {
    test.include(countryList, "Lesotho");
  });

  Tinytest.add("countryList - Liberia", function (test) {
    test.include(countryList, "Liberia");
  });

  Tinytest.add("countryList - Libya", function (test) {
    test.include(countryList, "Libya");
  });

  Tinytest.add("countryList - Liechtenstein", function (test) {
    test.include(countryList, "Liechtenstein");
  });

  Tinytest.add("countryList - Lithuania", function (test) {
    test.include(countryList, "Lithuania");
  });

  Tinytest.add("countryList - Luxembourg", function (test) {
    test.include(countryList, "Luxembourg");
  });

  Tinytest.add("countryList - Macau", function (test) {
    test.include(countryList, "Macau");
  });

  Tinytest.add("countryList - Macedonia", function (test) {
    test.include(countryList, "Macedonia");
  });

  Tinytest.add("countryList - Madagascar", function (test) {
    test.include(countryList, "Madagascar");
  });

  Tinytest.add("countryList - Malawi", function (test) {
    test.include(countryList, "Malawi");
  });

  Tinytest.add("countryList - Malaysia", function (test) {
    test.include(countryList, "Malaysia");
  });

  Tinytest.add("countryList - Maldives", function (test) {
    test.include(countryList, "Maldives");
  });

  Tinytest.add("countryList - Mali", function (test) {
    test.include(countryList, "Mali");
  });

  Tinytest.add("countryList - Malta", function (test) {
    test.include(countryList, "Malta");
  });

  Tinytest.add("countryList - Marshall Islands", function (test) {
    test.include(countryList, "Marshall Islands");
  });

  Tinytest.add("countryList - Mauritania", function (test) {
    test.include(countryList, "Mauritania");
  });

  Tinytest.add("countryList - Mauritius", function (test) {
    test.include(countryList, "Mauritius");
  });

  Tinytest.add("countryList - Mexico", function (test) {
    test.include(countryList, "Mexico");
  });

  Tinytest.add("countryList - Micronesia", function (test) {
    test.include(countryList, "Micronesia");
  });

  Tinytest.add("countryList - Moldova", function (test) {
    test.include(countryList, "Moldova");
  });

  Tinytest.add("countryList - Monaco", function (test) {
    test.include(countryList, "Monaco");
  });

  Tinytest.add("countryList - Mongolia", function (test) {
    test.include(countryList, "Mongolia");
  });

  Tinytest.add("countryList - Montenegro", function (test) {
    test.include(countryList, "Montenegro");
  });

  Tinytest.add("countryList - Morocco", function (test) {
    test.include(countryList, "Morocco");
  });

  Tinytest.add("countryList - Mozambique", function (test) {
    test.include(countryList, "Mozambique");
  });

  Tinytest.add("countryList - Namibia", function (test) {
    test.include(countryList, "Namibia");
  });

  Tinytest.add("countryList - Nauru", function (test) {
    test.include(countryList, "Nauru");
  });

  Tinytest.add("countryList - Nepal", function (test) {
    test.include(countryList, "Nepal");
  });

  Tinytest.add("countryList - Netherlands", function (test) {
    test.include(countryList, "Netherlands");
  });

  Tinytest.add("countryList - Netherlands Antilles", function (test) {
    test.include(countryList, "Netherlands Antilles");
  });

  Tinytest.add("countryList - New Zealand", function (test) {
    test.include(countryList, "New Zealand");
  });

  Tinytest.add("countryList - Nicaragua", function (test) {
    test.include(countryList, "Nicaragua");
  });

  Tinytest.add("countryList - Niger", function (test) {
    test.include(countryList, "Niger");
  });

  Tinytest.add("countryList - Nigeria", function (test) {
    test.include(countryList, "Nigeria");
  });

  Tinytest.add("countryList - North Korea", function (test) {
    test.include(countryList, "North Korea");
  });

  Tinytest.add("countryList - Norway", function (test) {
    test.include(countryList, "Norway");
  });

  Tinytest.add("countryList - Oman", function (test) {
    test.include(countryList, "Oman");
  });

  Tinytest.add("countryList - Pakistan", function (test) {
    test.include(countryList, "Pakistan");
  });

  Tinytest.add("countryList - Palau", function (test) {
    test.include(countryList, "Palau");
  });

  Tinytest.add("countryList - Palestinian Territories", function (test) {
    test.include(countryList, "Palestinian Territories");
  });

  Tinytest.add("countryList - Panama", function (test) {
    test.include(countryList, "Panama");
  });

  Tinytest.add("countryList - Papua New Guinea", function (test) {
    test.include(countryList, "Papua New Guinea");
  });

  Tinytest.add("countryList - Paraguay", function (test) {
    test.include(countryList, "Paraguay");
  });

  Tinytest.add("countryList - Peru", function (test) {
    test.include(countryList, "Peru");
  });

  Tinytest.add("countryList - Philippines", function (test) {
    test.include(countryList, "Philippines");
  });

  Tinytest.add("countryList - Poland", function (test) {
    test.include(countryList, "Poland");
  });

  Tinytest.add("countryList - Portugal", function (test) {
    test.include(countryList, "Portugal");
  });

  Tinytest.add("countryList - Qatar", function (test) {
    test.include(countryList, "Qatar");
  });

  Tinytest.add("countryList - Romania", function (test) {
    test.include(countryList, "Romania");
  });

  Tinytest.add("countryList - Russia", function (test) {
    test.include(countryList, "Russia");
  });

  Tinytest.add("countryList - Rwanda", function (test) {
    test.include(countryList, "Rwanda");
  });

  Tinytest.add("countryList - Saint Kitts and Nevis", function (test) {
    test.include(countryList, "Saint Kitts and Nevis");
  });

  Tinytest.add("countryList - Saint Lucia", function (test) {
    test.include(countryList, "Saint Lucia");
  });

  Tinytest.add("countryList - Saint Vincent and the Grenadines", function (test) {
    test.include(countryList, "Saint Vincent and the Grenadines");
  });

  Tinytest.add("countryList - Samoa ", function (test) {
    test.include(countryList, "Samoa ");
  });

  Tinytest.add("countryList - San Marino", function (test) {
    test.include(countryList, "San Marino");
  });

  Tinytest.add("countryList - Sao Tome and Principe", function (test) {
    test.include(countryList, "Sao Tome and Principe");
  });

  Tinytest.add("countryList - Saudi Arabia", function (test) {
    test.include(countryList, "Saudi Arabia");
  });

  Tinytest.add("countryList - Senegal", function (test) {
    test.include(countryList, "Senegal");
  });

  Tinytest.add("countryList - Serbia", function (test) {
    test.include(countryList, "Serbia");
  });

  Tinytest.add("countryList - Seychelles", function (test) {
    test.include(countryList, "Seychelles");
  });

  Tinytest.add("countryList - Sierra Leone", function (test) {
    test.include(countryList, "Sierra Leone");
  });

  Tinytest.add("countryList - Singapore", function (test) {
    test.include(countryList, "Singapore");
  });

  Tinytest.add("countryList - Sint Maarten", function (test) {
    test.include(countryList, "Sint Maarten");
  });

  Tinytest.add("countryList - Slovakia", function (test) {
    test.include(countryList, "Slovakia");
  });

  Tinytest.add("countryList - Slovenia", function (test) {
    test.include(countryList, "Slovenia");
  });

  Tinytest.add("countryList - Solomon Islands", function (test) {
    test.include(countryList, "Solomon Islands");
  });

  Tinytest.add("countryList - Somalia", function (test) {
    test.include(countryList, "Somalia");
  });

  Tinytest.add("countryList - South Africa", function (test) {
    test.include(countryList, "South Africa");
  });

  Tinytest.add("countryList - South Korea", function (test) {
    test.include(countryList, "South Korea");
  });

  Tinytest.add("countryList - South Sudan", function (test) {
    test.include(countryList, "South Sudan");
  });

  Tinytest.add("countryList - Spain ", function (test) {
    test.include(countryList, "Spain ");
  });

  Tinytest.add("countryList - Sri Lanka", function (test) {
    test.include(countryList, "Sri Lanka");
  });

  Tinytest.add("countryList - Sudan", function (test) {
    test.include(countryList, "Sudan");
  });

  Tinytest.add("countryList - Suriname", function (test) {
    test.include(countryList, "Suriname");
  });

  Tinytest.add("countryList - Swaziland ", function (test) {
    test.include(countryList, "Swaziland ");
  });

  Tinytest.add("countryList - Sweden", function (test) {
    test.include(countryList, "Sweden");
  });

  Tinytest.add("countryList - Switzerland", function (test) {
    test.include(countryList, "Switzerland");
  });

  Tinytest.add("countryList - Syria", function (test) {
    test.include(countryList, "Syria");
  });

  Tinytest.add("countryList - Taiwan", function (test) {
    test.include(countryList, "Taiwan");
  });

  Tinytest.add("countryList - Tajikistan", function (test) {
    test.include(countryList, "Tajikistan");
  });

  Tinytest.add("countryList - Tanzania", function (test) {
    test.include(countryList, "Tanzania");
  });

  Tinytest.add("countryList - Thailand ", function (test) {
    test.include(countryList, "Thailand ");
  });

  Tinytest.add("countryList - Timor-Leste", function (test) {
    test.include(countryList, "Timor-Leste");
  });

  Tinytest.add("countryList - Togo", function (test) {
    test.include(countryList, "Togo");
  });

  Tinytest.add("countryList - Tonga", function (test) {
    test.include(countryList, "Tonga");
  });

  Tinytest.add("countryList - Trinidad and Tobago", function (test) {
    test.include(countryList, "Trinidad and Tobago");
  });

  Tinytest.add("countryList - Tunisia", function (test) {
    test.include(countryList, "Tunisia");
  });

  Tinytest.add("countryList - Turkey", function (test) {
    test.include(countryList, "Turkey");
  });

  Tinytest.add("countryList - Turkmenistan", function (test) {
    test.include(countryList, "Turkmenistan");
  });

  Tinytest.add("countryList - Tuvalu", function (test) {
    test.include(countryList, "Tuvalu");
  });

  Tinytest.add("countryList - Uganda", function (test) {
    test.include(countryList, "Uganda");
  });

  Tinytest.add("countryList - Ukraine", function (test) {
    test.include(countryList, "Ukraine");
  });

  Tinytest.add("countryList - United Arab Emirates", function (test) {
    test.include(countryList, "United Arab Emirates");
  });

  Tinytest.add("countryList - United Kingdom", function (test) {
    test.include(countryList, "United Kingdom");
  });

  Tinytest.add("countryList - United States", function (test) {
    test.include(countryList, "United States");
  });

  Tinytest.add("countryList - Uruguay", function (test) {
    test.include(countryList, "Uruguay");
  });

  Tinytest.add("countryList - Uzbekistan", function (test) {
    test.include(countryList, "Uzbekistan");
  });

  Tinytest.add("countryList - Vanuatu", function (test) {
    test.include(countryList, "Vanuatu");
  });

  Tinytest.add("countryList - Venezuela", function (test) {
    test.include(countryList, "Venezuela");
  });

  Tinytest.add("countryList - Vietnam", function (test) {
    test.include(countryList, "Vietnam");
  });

  Tinytest.add("countryList - Yemen", function (test) {
    test.include(countryList, "Yemen");
  });

  Tinytest.add("countryList - Zambia", function (test) {
    test.include(countryList, "Zambia");
  });

  Tinytest.add("countryList - Zimbabwe", function (test) {
    test.include(countryList, "Zimbabwe");
  });
}
