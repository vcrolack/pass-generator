# FLOW

## Objective

An app for password generation

## Steps for development

1. Create a counter to characters for the password
    * Fill slider with blue color
    * Update counter with numbers
    * Save counter's state
    * Share the state of the counter with anothers components
2. Add functionality to checkbox form
    * Create array state for save the user's selections
    * Validate the functioning of the form
      * What happen if the form is blank
      * What happen if the form is full
    * Assing values for the checkboxes
3. Add functionality to security level
    * Create a range of security
      * In this range have to length validatio
      * Plus for use symbols, numbers, capital letters and lower letters
    * Show to the user its security with the UI
4. Add functionaly to generate pass button
    * Crear a hook (usePassword)
      * Parameters: character state, list of preferences state and counter state
      * function generate password
        * Investigate ways to generate a custom password
      * return password
5. Show the password on the input
6. Create function to copy password
7. Testing