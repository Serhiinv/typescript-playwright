from playwright.sync_api import Page
from app.page_object.lnt.user_page import UserPage
from app.page_object.oi.users import Users
from playwright.sync_api import expect

def verify_page(page):
    expect(page.get_by_text("Oops!")).not_to_be_visible(timeout=3000)
    response = page.context.request.get(page.url)
    assert response.status == 200
    page.wait_for_timeout(500)

def verify_user_logged_in(page):
    expect(page.get_by_text("Log out")).to_be_visible(timeout=5000)

# Run on staging
# def test_my_account_menu_logged_in_user_sgb(page: Page):
#     get_page = page
#     up = UserPage(get_page)
#     up.openVercel(Users.user_sgb_stg, Users.url_sgb_stg, Users.domain_sgb_stg, Users.vercel_uuid, Users.vercel_domain, Users.vercel_jwt)

# Production test
def test_my_account_menu_logged_in_user_sgb(page: Page):
    get_page = page
    up = UserPage(get_page)
    up.open(Users.user_sgb, Users.url_sgb, Users.domain_sgb)

    page.get_by_text("My account").click()
    verify_user_logged_in(page)
    page.get_by_role("link", name="Buying").click()
    verify_page(page)

    page.get_by_text("My account").first.click()
    page.get_by_role("link", name="Selling").first.click()
    verify_page(page)
    page.get_by_text("My account").first.click()
    page.get_by_role("link", name="Lot alerts").first.click()
    verify_page(page)
    # page.get_by_text("My account").first.click()
    # page.get_by_role("link", name="My ID").first.click()
    # verify_page(page)
    page.get_by_text("My account").first.click()
    page.get_by_role("link", name="Profile").first.click()
    verify_page(page)


    page.get_by_role("link", name="Buying").click()
    verify_page(page)
    page.get_by_role("link", name="Selling").click()
    verify_page(page)
    page.get_by_role("link", name="Favourites").nth(1).click()
    verify_page(page)
    page.get_by_role("link", name="Lot alerts").click()
    verify_page(page)
    # page.get_by_role("link", name="My ID").click()
    # verify_page(page)
    page.get_by_role("link", name="Profile").click()
    verify_page(page)
