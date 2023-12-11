Feature: Manage TodoSteps

Background:
    Given I visit the TODO homepage

Scenario: Add a new TODO
    When I submit a new TODO "Task 1"
    When I submit a new TODO "Task 2"
    Then The count of pending items is 4


Scenario: Check an item
    Given I submitted a new TODO "Task 1"
    When I check the item #3
    Then The count of pending items is 2