Feature: Demo QA - Selecting Menu

    Scenario: Selecting Menu
        Given User go to "https://demoqa.com/select-menu"
        When User in "Select Menu" page
        Then User choose select value "Another root option"
        Then User choose select one "Other"
        Then User choose old style select menu "Aqua"
        Then User choose multi select drop down "all color"
        Then User success input all select menu