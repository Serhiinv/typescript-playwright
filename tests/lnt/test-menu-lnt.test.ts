import { test } from '@playwright/test';
import { Main } from '../../page-object/lnt/main';

test('test menu lnt @menu-main', async ({ page }) => {
    const m = new Main(page);
    await m.pageOpen();
    await m.denyCookies();

    await m.openMenu("Auctions");
    await m.openSubMenu("Auction Calendar");
    await m.verifyPage();

    await m.openMenu("Auctions");
    await m.openSubMenu("Auction Results");
    await m.verifyPage();

    await m.openMenu("Auctions");
    await m.openSubMenu("How to Buy");
    await m.verifyPage();

    await m.openMenu("Auctions");
    await m.openSubMenu("How to Sell");
    await m.verifyPage();

    await m.openMenu("Auctions");
    await m.openSubMenu("Request an Auction Estimate");
    await m.verifyPage();

    await m.openMenu("Auctions");
    await m.openSubMenu("Events & Valuation Days");
    await m.verifyPage();

    await m.openMenu("Auctions");
    await m.openSubMenu("Events & Valuation Days");
    await m.verifyPage();

    // Departments
    // Fine art section
    await m.openMenu("Departments");
    await m.openSubMenu("Fine Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Contemporary Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("European Art & Old Masters");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Modern British Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Prints & Multiples");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Scottish Art");
    await m.verifyPage();
    // Design section
    await m.openMenu("Departments");
    await m.openSubMenu("Design");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Contemporary Craft");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Design: 1860 -");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Lalique");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Modern Design");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Studio Ceramics");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Studio Glass");
    await m.verifyPage();

    await m.openMenu("Departments");
    await m.openSubMenu("Luxury");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Jewellery");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Silver");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Watches");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("World Cultures");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("African & Oceanic Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Asian Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Islamic & Indian Art");
    await m.verifyPage();

    await m.openMenu("Departments");
    await m.openSubMenu("Antiques");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Antiquities");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Arms & Armour");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("British & European Furniture");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Ceramics & Glass");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Clocks & Scientific");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Jacobite Works of Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Natural History");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Rugs & Carpets");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Sculpture & Works of Art");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Tapestries & Textiles");
    await m.verifyPage();

    await m.openMenu("Departments");
    await m.openSubMenu("Collectables");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Books & Manuscripts");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Photography");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Posters");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Whisky & Wine");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Private Collections");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Corporate");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("Private");
    await m.verifyPage();
    await m.openMenu("Departments");
    await m.openSubMenu("All Departments");
    await m.verifyPage();

    // Services
    await m.openMenu("Services");
    await m.openSubMenu("All Services");
    await m.verifyPage();
    await m.openMenu("Services");
    await m.openSubMenu("Professional Valuation");
    await m.verifyPage();
    await m.openMenu("Services");
    await m.openSubMenu("Private & Corporate Art");
    await m.verifyPage();
    await m.openMenu("Services");
    await m.openSubMenu("Private Sales");
    await m.verifyPage();
    await m.openMenu("Services");
    await m.openSubMenu("Request an Estimate Free");
    await m.verifyPage();
    await m.openMenu("Services");
    await m.openSubMenu("Our Valuations Team");
    await m.verifyPage();
    await m.openMenu("Services");
    await m.openSubMenu("Forthcoming Auctions");
    await m.verifyPage();

    await m.openMenu("Stories");
    await m.verifyPage();

    // About Us
    await m.openMenu("About Us");
    await m.openSubMenu("Our Jobs");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Our Locations");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Our Partners");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Our Press & PR");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Our Specialists");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Our Story");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Our Team");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("Artists & Designers Directory");
    await m.verifyPage();
    await m.openMenu("About Us");
    try {
        await m.openMenu("About Us");
    } catch {
        // Continue if menu already open
    }
    await m.openSubMenu("Meet our Specialists Alex");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("How to Buy How to buy at a");
    await m.verifyPage();
    await m.openMenu("About Us");
    await m.openSubMenu("How to Sell How to Sell Sell");
    await m.verifyPage();
});
