Feature: Demo QA - Searching Books

    Scenario: Searched book is not found
        Given User go to "https://demoqa.com/books"
        When User in "Book Store" page
        Then User search book "qa engineer"
        Then User see "No rows found"

    Scenario: Searched book is exist
        Given User go to "https://demoqa.com/books"
        When User in "Book Store" page
        Then User search book "Git Pocket Guide"
        Then User click book "Git Pocket Guide"
        Then User see book "Git Pocket Guide"