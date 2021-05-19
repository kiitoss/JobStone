function validate_input_size(input) {
  if (input.value.length > input.maxLength) {
    input.value = input.value.slice(0, input.maxLength);
  }
}

function validate_input_integrity(e) {
  if (["-", "+", "e"].includes(e.key)) {
    e.preventDefault();
  }
}

