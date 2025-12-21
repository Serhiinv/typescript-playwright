import re

from playwright.sync_api import expect

def verify_page(page):
    expect(page.get_by_text("Page not found")).not_to_be_visible(timeout=3000)
    # response = page.context.request.get(page.url)
    # assert response.status == 200
    page.wait_for_timeout(1500)
def click_menu_btn(page, menu_name: str):
    page.get_by_role("button", name=f"{menu_name}").click()
    if menu_name == "What we do":
        n = 0
    elif menu_name == "Our organisation":
        n = 1
    elif menu_name == "Aircraft":
        n = 2
    elif menu_name == "Display teams":
        n = 3
    elif menu_name == "Community & Support":
        n = 4
    else:
        n = 5
    try:
        expect(page.get_by_label("Close drop down menu").nth(n)).to_be_visible()
    except:
        page.get_by_role("button", name=f"{menu_name}").click()



def test_menu_raf(page):
    """Simple navigation test."""
    page.goto("https://www.raf.mod.uk/")
    page.get_by_text("Necessary cookies only").click()

    page.get_by_text("Home", exact=True).click()
    verify_page(page)

    # page.get_by_role("button", name="What we do").click()
    click_menu_btn(page, "What we do")

    page.get_by_text("Overview").first.click()
    verify_page(page)


    click_menu_btn(page, "What we do")
    page.get_by_text("Global operations").first.click()
    verify_page(page)

    click_menu_btn(page, "What we do")
    page.get_by_text("UK Space Command").first.click()
    verify_page(page)

    click_menu_btn(page, "What we do")
    page.get_by_text("Team Tempest").first.click()
    verify_page(page)

    click_menu_btn(page, "What we do")
    page.get_by_text("Centre for Air and Space Power Studies").first.click()
    verify_page(page)

    click_menu_btn(page, "What we do")
    page.get_by_text("Inspiring STEM careers").first.click()
    verify_page(page)

    click_menu_btn(page, "What we do")
    page.get_by_text("Our history").first.click()
    verify_page(page)

    click_menu_btn(page, "Our organisation")
    page.get_by_label("Our organisation", exact=True).get_by_text("Overview").click()
    verify_page(page)

    click_menu_btn(page, "Our organisation")
    page.get_by_role("link", name="Overview").click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.locator("a").filter(has_text=re.compile(r"^Our people$")).click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_text("Senior Commanders").click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_role("link", name="RAF Ranks").click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_text("Groups").click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_text("RAF Stations").click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_text("Squadrons", exact=True).click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_text("Global Enablement").click()
    verify_page(page)
    click_menu_btn(page, "Our organisation")
    page.get_by_text("University Air Squadrons").click()
    verify_page(page)
    click_menu_btn(page, "Aircraft")
    page.get_by_text("All aircraft").click()
    verify_page(page)
    click_menu_btn(page, "Aircraft")
    page.locator("span").filter(has_text="Current aircraft").click()
    verify_page(page)
    click_menu_btn(page, "Aircraft")
    page.locator("span").filter(has_text="Future aircraft").click()
    verify_page(page)
    click_menu_btn(page, "Aircraft")
    page.locator("span").filter(has_text="Heritage aircraft").click()
    verify_page(page)

    click_menu_btn(page, "Display teams")
    page.get_by_text("Red Arrows", exact=True).click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_role("link", name="Battle of Britain Memorial Flight", exact=True).click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_role("link", name="Typhoon Display Team").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("Chinook Display Team").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_role("link", name="Falcons Display Team").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("Grob Tutor Display Team").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("RAF Music Services").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("RAF Voluntary Bands").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("RAF Pipes and Drums").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("King's Colour Squadron", exact=True).click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("RAF Presentation Team").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("Typhoon - Displays Request a").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.get_by_text("BBMF - Displays Upcoming UK").click()
    verify_page(page)
    click_menu_btn(page, "Display teams")
    page.locator("a").filter(has_text="Red Arrows - Displays Where").click()
    verify_page(page)

    click_menu_btn(page, "Community & Support")
    page.locator("span").filter(has_text="Serving families").click()
    verify_page(page)
    click_menu_btn(page, "Community & Support")
    page.get_by_text("RAF Reserves: Employers'").click()
    verify_page(page)
    click_menu_btn(page, "Community & Support")
    page.get_by_text("Health & Wellbeing").click()
    verify_page(page)
    click_menu_btn(page, "Community & Support")
    page.get_by_label("Community & Support", exact=True).get_by_text("Community & Support News").click()
    verify_page(page)
    click_menu_btn(page, "Community & Support")
    page.get_by_label("Community & Support", exact=True).get_by_text("MOST POPULAR").click()
    verify_page(page)

    click_menu_btn(page, "News")
    page.get_by_text("News articles").click()
    verify_page(page)
    click_menu_btn(page, "News")
    page.locator("a").filter(has_text=re.compile(r"^InsideAIR podcast$")).click()
    verify_page(page)
    click_menu_btn(page, "News")
    page.get_by_text("Senior Appointments").click()
    verify_page(page)
    click_menu_btn(page, "News")
    page.locator("a").filter(has_text="InsideAIR podcast Latest").click()
    verify_page(page)
    click_menu_btn(page, "News")
    page.locator("a").filter(has_text="RAF 60 Second Update Current").click()
    verify_page(page)
    page.get_by_label("Join the RAF").click()
    verify_page(page)




