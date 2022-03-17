## Strategy is to control test data from feature file.
## Test is dynamic. You can add as many items as you want.

Feature: Checkout

  Scenario: User is able to select items, remove items, and complete checkout
    Given I go to Sauce Demo homepage
    When I enter username 'standard_user' and password 'secret_sauce'
    And I click login
    Then I am navigated to inventory page
    When I sort the items by
      | sort                |
      | Price (low to high) |
    And I add items to cart
      | item                  |
      | Sauce Labs Onesie     |
      | Sauce Labs Bike Light |
    And I visit the shopping cart
    Then I am navigated to cart page
    And I can view the items I selected to add to cart
    When I remove items from cart
      | item              |
      | Sauce Labs Onesie |
    When I go back
    And I add items to cart
      | item                     |
      | Sauce Labs Fleece Jacket |
    When I visit the shopping cart
    And I can view the items I selected to add to cart
    When I click checkout
    Then I am navigated to checkout-step-one page
    When I fill my info
      | first_name | last_name | zip   |
      | Tanveer    | Ahmed     | 11101 |
    And I click continue
    Then I am navigated to checkout-step-two page
    And I verify items I am purchasing my selected items
    And I verify item sub-total
    When I click finish
    Then I am navigated to checkout-complete page