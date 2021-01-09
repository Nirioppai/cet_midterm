let validateResult = false;

//Email validation
function emailValidate() {
  const email1 = document.getElementById('email1').value;
  const email2 = document.getElementById('email2').value;

  //empty
  if (email1 === '' || email2 === '') {
    alert('An email field is empty.');
    validateResult = false;
  }
  //no match
  if (email1 && email2 !== '' && email1 !== email2) {
    alert('Emails does not match.');
    validateResult = false;
  }
  //match
  if (email1 && email2 !== '' && email1 === email2) {
    validateResult = true;
  }
}

//Export JSON

function saveJSON(obj) {
  var str = JSON.stringify(JSON.parse(obj));
  var data = encode(str);

  var blob = new Blob([data], {
    type: 'application/octet-stream',
  });

  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'Registration Result.json');
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent(
    'click',
    true,
    true,
    window,
    1,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  link.dispatchEvent(event);
}

var encode = function (s) {
  var out = [];
  for (var i = 0; i < s.length; i++) {
    out[i] = s.charCodeAt(i);
  }
  return new Uint16Array(out);
};

//Data to JSON
function dataProcess() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email2').value;
  const age = document.getElementById('age').value;
  const plan = document.getElementById('plan').value;
  let mailingList = document.getElementById('mailingList');
  const radiosm = document.getElementById('small');
  const radiomd = document.getElementById('medium');
  const radiolg = document.getElementById('large');

  let size = '';

  //Mailing List
  if (mailingList.checked == true) {
    mailingList = 'Yes';
  } else {
    mailingList = 'No';
  }

  //Sizing

  if (radiosm.checked == true) {
    size = 'Small';
  } else if (radiomd.checked == true) {
    size = 'Medium';
  } else if (radiolg.checked == true) {
    size = 'Large';
  }

  //Result
  const result = {
    'First Name': firstname,
    'Last Name': lastname,
    Email: email,
    Age: age,
    Plan: plan,
    'Mailing List': mailingList,
    Size: size,
  };

  console.log(result);

  const stringified = JSON.stringify(result);

  if (validateResult === true) {
    console.log(stringified);
    saveJSON(stringified);
    alert('Result is exported to JSON.');
  } else {
    alert('Email is not valid, make sure your email is the same.');
  }
}
