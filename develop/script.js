// START

// WHEN button clicked (event)
    // INPUT length-criteria prompt

// WHEN next button clicked (event)
    // IF condition 8 - 128 is FALSE
        // THEN DISPLAY message "number must be between 8 - 128"
        // WHEN ok button clicked (event)
            // return to length-critera prompt
    // ELSE condition 8 - 128 is TRUE
        // THEN DISPLAY character-type prompt

// INPUT character-type prompt via checkbox list

// WHEN next button clicked (event)
    // IF condition > 1 max 4 boxes checked is FALSE (aka no boxes checked)
        // THEN DISPLAY message "must check at least one box"
        // WHEN ok button clicked (event)
            // return to character-type prompt
    // ELSE condition >1 mas 4 boxes checked is TRUE
        // THEN DISPLAY criteria validation prompt

// WHEN yes button clicked (event)
    // DISPLAY password-message in webpage textarea
        
//WHEN no button clicked (event)
    // DISPLAY oops-message in webpage textarea