from playwright.sync_api import expect

def verify_page(page):
    expect(page.get_by_text("Oops!")).not_to_be_visible(timeout=3000)
    response = page.context.request.get(page.url)
    assert response.status == 200
    page.wait_for_timeout(500)


def verify_no_broken_images(page):
    images = page.locator("img")
    count = images.count()
    broken_images = []
    for i in range(count):
        img = images.nth(i)
        img_url = img.get_attribute("src")
        if not img_url or not img_url.startswith("http"):
            continue
        try:
            response = page.request.get(img_url, timeout=5000)
            if response.status != 200:
                broken_images.append(f"Image {i}: {img_url} (status {response.status})")
        except Exception as e:
            broken_images.append(f"Image {i}: {img_url} - {e}")
    assert not broken_images, f"Broken images found: {broken_images}"



def test_menu_sgb(page):
    """Simple navigation test."""
    page.goto("https://sgbaldwins.com/")
    page.get_by_role("button", name="Deny").click()

    page.get_by_text("Auctions", exact=True).hover()
    page.get_by_role("link", name="Upcoming Auction").first.click()
    verify_page(page)
    verify_no_broken_images(page)

    page.get_by_text("Auctions", exact=True).hover()
    page.get_by_role("link", name="Past Auction").first.click()
    verify_page(page)
    verify_no_broken_images(page)


    page.get_by_text("Auctions", exact=True).hover()
    page.get_by_role("link", name="How to Buy").first.click()
    verify_page(page)
    verify_no_broken_images(page)

    # Departments
    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Stamps", exact=True).click()
    verify_page(page)
    verify_no_broken_images(page)

    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Coins", exact=True).click()
    verify_page(page)
    verify_no_broken_images(page)

    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Trading Cards").first.click()
    verify_page(page)
    verify_no_broken_images(page)

    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Military Medals").click()
    verify_page(page)
    verify_no_broken_images(page)

    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Militaria", exact=True).click()
    verify_page(page)
    verify_no_broken_images(page)

    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Bullion").click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="Comics", exact=True).click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("Departments", exact=True).hover()
    page.get_by_role("link", name="All Departments").click()
    verify_page(page)
    verify_no_broken_images(page)

    # Stories
    page.get_by_text("Stories", exact=True).click()
    verify_page(page)
    verify_no_broken_images(page)

    # Sell
    page.evaluate("window.scrollTo(0, 0)")
    page.get_by_text("Sell", exact=True).hover()
    page.get_by_role("link", name="How to Sell").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("Sell", exact=True).hover()
    page.get_by_role("link", name="Free Valuation").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("Sell", exact=True).hover()
    page.get_by_role("link", name="Signature Collections").first.click()
    verify_page(page)
    verify_no_broken_images(page)

    # About Us
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="History").click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Our Story").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Events").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Press").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Our Specialists").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Our Team").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Partnerships").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="Locations").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("About us", exact=True).first.hover()
    page.get_by_role("link", name="FAQ").first.click()
    verify_page(page)
    verify_no_broken_images(page)

    # Buy now
    page.get_by_text("Buy Now", exact=True).first.hover()
    page.get_by_role("link", name="Stamps").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    # page.get_by_text("Buy Now", exact=True).first.hover()
    # page.get_by_role("link", name="Coins").first.click() #Opens another site
    # verify_page(page)
    page.get_by_text("Buy Now", exact=True).first.hover()
    page.get_by_role("link", name="SG Publications").first.click()
    verify_page(page)
    verify_no_broken_images(page)
    page.get_by_text("Buy Now", exact=True).first.hover()
    page.get_by_role("link", name="Bullion").first.click() #Opens another site
    verify_page(page)
