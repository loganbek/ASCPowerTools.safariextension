// settings.
var settings = null;

// Categories.
var categories = null;

// Actions.
var actions = null;

// The position of the actions menu.
var actionsPosition = null;

// The position of the categories menu.
var categoriesPosition = null;

// Do some funky stuff.
var ajax = {};

// The current community.  
var community = null;

// Crude SPAM filter.
var respam = null;

// Special handling for DOM updates.
var DOMUpdateTimeout = null;

// See if I have settings.
var ASCPowerToolsSettings = localStorage.getItem("ASCPowerToolsSettings");

// Only add leaf communities.
var communities =
  {
  'user_tips_library_documents' : true,
  'older_hardware' : true,
  'using_apple_support_communities' : true,
  'developer_forums' : true,
  'ipad/using_ipad' : true,
  'ipad/ipad_in_business_and_education' : true,
  'iphone/using_iphone' : true,
  'iphone/iphone_hardware' : true,
  'iphone/iphone_in_business_and_education' : true,
  'iphone/accessories' : true,
  'ipod/ipod_touch' : true,
  'ipod/ipod_shuffle' : true,
  'ipod/ipod_nano' : true,
  'ipod/ipod_classic' : true,
  'ipod/apple_branded_ipod_accessories' : true,
  'ipod/older_ipods' : true,
  'itunes/itunes_for_windows' : true,
  'itunes/itunes_for_mac' : true,
  'itunes/itunes_match' : true,
  'itunes/itunes_store' : true,
  'itunes/home_sharing' : true,
  'itunes/producing_podcasts' : true,
  'desktop_computers/imac_intel' : true,
  'desktop_computers/mac_mini' : true,
  'desktop_computers/mac_pro' : true,
  'desktop_computers/power_mac' : true,
  'desktop_computers/imac_powerpc' : true,
  'desktop_computers/emac' : true,
  'ibooks/ibooks_store' : true,
  'ibooks/ibooks_for_ios' : true,
  'ibooks/ibooks_for_mac' : true,
  'app_store/iphoto_for_ios' : true,
  'app_store/imovie_for_ios' : true,
  'app_store/iwork_for_ios' : true,
  'app_store/garageband_for_ios' : true,
  'app_store/itunes_u_for_ios' : true,
  'app_store/podcasts_for_ios' : true,
  'mac_app_store/using_mac_apple_store' : true,
  'mac_app_store/facetime_for_mac' : true,
  'mac_os/os_x_el_capitan' : true,
  'mac_os/os_x_yosemite' : true,
  'mac_os/os_x_mavericks' : true,
  'mac_os/os_x_mountain_lion' : true,
  'mac_os/mac_os_x_v10.7_lion' : true,
  'mac_os/mac_os_x_v10.6_snow_leopard' : true,
  'mac_os/mac_os_x_v10.5_leopard' : true,
  'mac_os/mac_os_x_v10.4_tiger' : true,
  'mac_os/mac_os_x_v10.3_and_earlier' : true,
  'mac_os/mac_os_x_technologies' : true,
  'mac_os/messages_beta' : true,
  'mac_os/classic_mac_os' : true,
  'mac_os/quicktime' : true,
  'mac_os/safari' : true,
  'mac_os/front_row' : true,
  'notebooks/macbook_pro' : true,
  'notebooks/macbook_air' : true,
  'notebooks/ibook' : true,
  'notebooks/macbook' : true,
  'notebooks/powerbook' : true,
  'ibooks_author/creating_books_for_ibooks_store' : true,
  'ibooks_author/ibooks_author' : true,
  'ibooks_author/creating_epubs' : true,
  'ibooks_author/sign-up___itunes_connect' : true,
  'ibooks_author/delivery' : true,
  'ilife/iphoto' : true,
  'ilife/imovie' : true,
  'ilife/garageband' : true,
  'ilife/iweb' : true,
  'ilife/idvd' : true,
  'iwork/keynote' : true,
  'iwork/pages' : true,
  'iwork/numbers' : true,
  'iwork/iwork_for_icloud_beta' : true,
  'professional_applications/aperture' : true,
  'professional_applications/compressor_4' : true,
  'professional_applications/final_cut_pro_x' : true,
  'professional_applications/final_cut_studio' : true,
  'professional_applications/final_cut_express_hd' : true,
  'professional_applications/final_cut_server' : true,
  'professional_applications/logic_express' : true,
  'professional_applications/logic_pro' : true,
  'professional_applications/logic_studio' : true,
  'professional_applications/mainstage' : true,
  'professional_applications/motion_5' : true,
  'professional_applications/other_pro_audio' : true,
  'professional_applications/other_pro_video' : true,
  'professional_applications/soundtrack' : true,
  'professional_applications/iad_producer' : true,
  'professional_applications/iad_workbench' : true,
  'accessibility/vision' : true,
  'accessibility/hearing' : true,
  'accessibility/physical_and_motor_skills' : true,
  'servers_enterprise_software/os_x_server' : true,
  'servers_enterprise_software/mac_os_x_lion_server' : true,
  'servers_enterprise_software/mac_os_x_server_v10.6_snow_leopard' : 
    true,
  'servers_enterprise_software/mac_os_x_server_v10.5_and_earlier' : 
    true,
  'servers_enterprise_software/mac_os_x_server_v10.4_and_earlier' : 
    true,
  'servers_enterprise_software/xsan' : true,
  'servers_enterprise_software/xserve_and_servers' : true,
  'servers_enterprise_software/apple_remote_desktop' : true,
  'servers_enterprise_software/webobjects' : true,
  'applications/appleworks' : true,
  'applications/ichat' : true,
  'applications/ical' : true,
  'peripherals/thunderbolt_display' : true,
  'peripherals/isight' : true,
  'peripherals/cinema_displays' : true,
  'peripherals/older_displays_and_monitors' : true,
  'peripherals/bluetooth' : true,
  'peripherals/magic_mouse_and_trackpad' : true,
  'appletv/appletv' : true,
  'icloud/icloud_on_my_ios_device' : true,
  'icloud/icloud_on_my_mac' : true,
  'icloud/icloud_on_my_pc' : true,
  'icloud/icloud.com' : true,
  'windows_software/boot_camp' : true,
  'windows_software/bonjour' : true,
  'windows_software/windows_compatibility' : true,
  'windows_software/software_update' : true,
  'wireless/airport' : true,
  'wireless/time_capsule' : true,
  'lounge/full_host_bar' : true,
  'lounge/water_cooler' : true,
  'lounge/community_operations' : true,
  'lounge/new_projects' : true,
  'itunes_u/itunes_u_course_manager' : true,
  'itunes_u/itunes_u_public_site_manager' : true,
  'older_software/legacy_networking' : true,
  'user_tips_library_documents/user_tip_discussions' : true,
  'apple_pay/setting_up_apple_pay' : true,
  'apple_pay/using_apple_pay_in_stores' : true,
  'apple_pay/using_apple_pay_within_apps' : true,
  'mac_os/photos_osx' : true,
  'watch/using_apple_watch' : true,
  'watch/apple_watch_hardware' : true,
  'watch/apple_watch_accessories' : true
  };

var fixed = false;

if(typeof safari != 'undefined')
  {
  // Message Event Listener
  safari.self.addEventListener('message', handleMessage, false);

  // Visibility Event Listener
  document.addEventListener('visibilitychange', handleVisibility, false);

  // If I already have settings, go ahead and run.
  if(ASCPowerToolsSettings)
    settings = JSON.parse(ASCPowerToolsSettings);
  
  if(!fixed && settings)
    runASCPowerTools();
    
  // If I don't have settings, let the current DOM render, ask 
  // Global.html for settings, and then fix the DOM when I get a result. 
  // This will be ugly the first time, but fixed on subsequent loads.
  else if(!fixed)
    // Message Event Dispatch
    safari.self.tab.dispatchMessage('getSettings');
  }
  
// Message Event Handler
function handleMessage(event) 
  {
  if(event.name == 'runASCPowerTools')
    {
    settings = event.message;
    
    if(settings.respam)
      respam = new RegExp(settings.respam);
    
    runASCPowerTools();    
    
    localStorage.ASCPowerToolsSettings = JSON.stringify(settings);
    }
  }
  
// Visibility Event handler.
function handleVisibility(event)
  {
  if(!document.hidden && !fixed)
    runASCPowerTools();
  }
  
// Handle a DOM update.
function handleDOMUpdate()
  {
  // If I already have a DOM Update timer pending, clear the timer.
  if(DOMUpdateTimeout)
    clearTimeout(DOMUpdateTimeout);
    
  // Start a new DOM update timer.
  DOMUpdateTimeout = setTimeout(updateDOM, 100);
  }
  
// My DOM update timer has fired. I guess this means that updates are 
// now complete.
function updateDOM()
  {
  // Reset the variable for next time.
  DOMUpdateTimeout = null;
  
  // Run ASC Power tools.
  runASCPowerTools();
  }
  
// Run the ASCPowerTools.
function runASCPowerTools()
  {
  // Fix all community links to be community content links.
  fixLinks();

  // Fix threads.
  fixThreads();
  
  // Keep fixing links on the main page.
  if(/discussions.apple.com\/welcome/.test(window.location.href))
    document.addEventListener('DOMSubtreeModified', fixLinks);
    
  fixed = true;
  }
  
// Fix all community links to be community content links.
function fixLinks()
  {
  var items = document.querySelectorAll("a");

  // https://discussions.apple.com/message/26177986#26177986
  // https://discussions.apple.com/thread/6408415
  for(var i = 0; i < items.length; ++i)
    {
    if(/discussions.apple.com\/community\/.+/.test(items[i].href))
      {
      var parts = items[i].href.split('?');

      var path = parts[0];

      var query = parts[1];

      if(!query)
        query = 
          '?filterID=contentstatus[published]~' + 
          'objecttype~objecttype[thread]';
  
      if(!(/\/content$/.test(path)))
        {
        // Don't add content to any group links.
        var found = 
          path.match(/discussions.apple.com\/community\/(.+)$/);
    
        if(found.length > 1)
          community = found[1];
    
        if(communities[community] != null) 
          items[i].href = path + '/content' + query;
        }
      }
    }
  }

// Fix threads.
function fixThreads()
  {
  if(/discussions.apple.com\/.+\/content/.test(window.location.href))
    fixThreadList();

  else 
    if(/discussions.apple.com\/thread\/.+/.test(window.location.href))
      fixThread();

  else 
    if(/discussions.apple.com\/inbox/.test(window.location.href))
      fixInbox();
  }

// Fix thread list.
function fixThreadList()
  {
  // Turn off any DOM change update handler.
  document.removeEventListener("DOMSubtreeModified", handleDOMUpdate);

  // Hide the Apple banner.
  hideAppleHeader();

  // Reduce whitespace on the page.
  reduceWhitespace();
  
  // Do some major surgery.

  // Move the categories and actions to a more convenient location.  
  var sidebar = 
    document.querySelector("div.j-column.j-column-s.j-column-s-nav");

  var forumHeader = 
    document.querySelector(".j-page-header.clearfix > h1");

  forumHeader.style.width = '90%';

  var forumName = 
    document.querySelector(".j-page-header.clearfix > h1 > a");

  forumName.style.verticalAlign = 'top';

  sidebar.style.display = 'inline-block';

  forumHeader.appendChild(sidebar);
    
  // Move this back over to where the actions were.  
  var items = document.querySelectorAll("div.j-column.j-column-l");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginLeft = '0';
    items[i].style.marginBottom = '0';
    }

  // Hide the category list.
  var originalCategories = 
    document.querySelector(".j-second-nav.j-second-nav-categories ul");

  if(originalCategories)
    {
    originalCategories.style.display = 'none';

    // I can't make this work with the original categories. 
    // Bail and dup.
    categories = originalCategories.cloneNode(true);

    // Get the categories ready to move.
    items = 
      document.querySelectorAll(
        ".j-second-nav.j-second-nav-categories");

    for(var i = 0; i < items.length; ++i)
      {
      items[i].style.display = 'inline-block';
      items[i].style.marginTop = '2px';
      items[i].style.marginLeft = '20px';
      items[i].style.verticalAlign = 'top';    
      }

    // Now turn the categories into a button with a pop-up menu.
    items = 
      document.querySelectorAll(
        ".j-second-nav.j-second-nav-categories h4");

    for(var i = 0; i < items.length; ++i)
      {
      items[i].style.fontSize = '14px';
      items[i].style.cursor = 'pointer';
    
      categoriesPosition = getPosition(items[i]);

      // Show a popup on mouse over.
      items[i].onclick = showCategoriesMenu;
      }

    categories.style.listStyleType = 'none';
    categories.style.padding = '5px';
    categories.style.position = 'absolute';
    categories.style.top = (categoriesPosition.y + 30) + 'px';
    categories.style.left = categoriesPosition.x + 'px';
    categories.style.zIndex = '2000';
    categories.style.border = '1px solid rgb(51, 51, 51)';
    categories.id = 'category-popup';
    categories.style.display = 'block';
    categories.style.backgroundColor = 'rgba(255, 255, 255, .95)';
    categories.style.padding = '5px';
    categories.style.borderRadius = '5px';
    categories.style.boxShadow = '5px 5px 5px rgba(100, 100, 100, .75)';
    categories.style.visibility = 'hidden';
    categories.style.opacity = '0';
    categories.style.transition = 
      'visibility 0.2s linear, opacity 0.2s linear';

    // Show the categories menu on mouse over.
    categories.onclick = showCategoriesMenu;

    // Now add my new category menu back into the DOM.
    document.body.appendChild(categories);

    // Kick the DOM in the butt to get it started.
    window.getComputedStyle(categories).opacity;

    // Space these out a bit now.
    items = document.querySelectorAll("#category-popup li");

    for(var i = 0; i < items.length; ++i)
      {
      items[i].style.marginTop = '10px';
      items[i].style.marginBottom = '10px';
      }
    }
 
  // Hide the actions.
  var originalActions = 
    document.querySelector(".j-box.j-box-actions.j-rc5 ul");

  if(originalActions)
    {
    originalActions.style.display = 'none';

    // I can't make this work with the original actions.
    actions = originalActions.cloneNode(true);
    }

  // Get the actions ready to move.
  items = document.querySelectorAll(".j-box.j-box-actions.j-rc5");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.display = 'inline-block';
    items[i].style.marginTop = '0';
    items[i].style.marginLeft = '20px';
    items[i].style.verticalAlign = 'top';
    }

  // Turn the actions into a button with a pop-up menu.
  items = document.querySelectorAll(".j-box.j-box-actions.j-rc5 h4");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.fontSize = '14px';
    items[i].style.cursor = 'pointer';
    
    actionsPosition = getPosition(items[i]);
    
    // Show a popup menu on mouseover.
    items[i].onclick = showActionsMenu;
    }

  if(actions)
    {
    actions.style.position = 'absolute';
    actions.style.top = (actionsPosition.y + 30) + 'px';
    actions.style.left = actionsPosition.x + 'px';
    actions.style.zIndex = '2000';
    actions.style.border = '1px solid rgb(51, 51, 51)';
    actions.id = 'actions-popup';
    actions.style.display = 'block';
    actions.style.backgroundColor = 'rgba(255, 255, 255, .95)';
    actions.style.padding = '5px';
    actions.style.borderRadius = '5px';
    actions.style.boxShadow = '5px 5px 5px rgba(100, 100, 100, .75)';
    actions.style.visibility = 'hidden';
    actions.style.opacity = '0';
    actions.style.transition = 
      'visibility 0.2s linear, opacity 0.2s linear';

    // Show the actions menu on mouseover.
    actions.onclick = showActionsMenu;

    document.body.appendChild(actions);

    // Kick the DOM in the butt to get it started.
    window.getComputedStyle(actions).opacity;
    }

  // Fix the actual content.
  fixContent();

  // OK to look for changes to the DOM again.
  document.addEventListener('DOMSubtreeModified', handleDOMUpdate);
  }
  
// Hide the Apple banner header.
function hideAppleHeader()
  {
  // Get rid of apple header.
  var items = document.querySelectorAll("#globalheader");

  for(var i = 0; i < items.length; ++i)
    items[i].style.display = 
      settings.hideAppleHeader
        ? 'none'
        : 'block';
  }

// Reduce whitespace.
function reduceWhitespace()
  {
  // Get rid of the fake background area.
  var items = document.querySelectorAll("body");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.background = 'none';
    items[i].style.minWidth = '900px';
    }

  // Get rid of the real margins that make the narrow page. 
  items = document.querySelectorAll("#body-apple");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.margin = '0';
    items[i].style.width = '100%';
    items[i].style.minWidth = '900px';
    }

  // Fix margins on header.
  items = document.querySelectorAll("#j-header");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginLeft = 'none';
    items[i].style.marginRight = '900px';
    items[i].style.width = '100%';
    items[i].style.fontSize = '18px';
    }

  // Tweak the margins.
  items = document.querySelectorAll("#j-header-wrap");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginLeft = '15px';
    items[i].style.marginRight = '15px';
    }

  // Fix the navigation bar in the upper-right corner.
  items = document.querySelectorAll("#j-globalNav");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginTop = '-10px';
    items[i].style.marginRight = '-15px';
    }

  // Adjust the navigation bar background.
  items = document.querySelectorAll("#j-globalNav-bg");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.margin = '0';
    items[i].style.padding = '0';
    items[i].style.height = '30px';
    }

  // Move the breadcrumbs to a more convenient location.
  items = document.querySelectorAll("#jive-breadcrumb");

  for(var i = 0; i < items.length; ++i)
    {
    //items[i].style.float = 'right';
    items[i].style.marginTop = '-10px';
    items[i].style.right = '15px';
    }

  // Get rid of whitespace inside the page. 
  items = document.querySelectorAll("#j-main");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.padding = '0';
    }

  // Remove whitespace around the social actions.
  items = document.querySelectorAll(".apple-social-actions-wrapper");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginRight = '0';
    items[i].style.marginTop = '-10px';
    }

  // Tighten up the layout.
  items = document.querySelectorAll(".j-content-filter");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginBottom = '0px';
    items[i].style.backgroundImage = 'none';
    items[i].style.borderBottom = 'none';
    }
    
  // Remove ugly "white" space.
  items = document.querySelectorAll(".j-browse-filter-row");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.borderTop = 'none';
    items[i].style.backgroundColor = 'rgb(242,242,242)';
    }
    
  // Fix the bottom.
  items = document.querySelectorAll(".j-bottom-row");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.margin = '0';
    items[i].style.paddingTop = '10px';
    }

  items = document.querySelectorAll(".j-bottom-row .j-pagination");

  for(var i = 0; i < items.length; ++i)
    items[i].style.position = 'static';

  // Remove more whitespace.  
  items = 
    document.querySelectorAll(
      ".j-body-place #jive-body>header.j-page-header");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.width = '100%';
    items[i].style.margin = '0';
    items[i].style.marginLeft = '15px';
    items[i].style.marginRight = '15px';
    items[i].style.height = '40px';
    }

  // Make the forum header smaller with less whitespace.
  items = 
    document.querySelectorAll(
      ".j-body-place #jive-body>header.j-page-header h1");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.fontSize = '20px';
    items[i].style.marginTop = '0';
    }

  // Reduce more whitespace.
  items = document.querySelectorAll(
    "div.j-layout.j-layout-sl.j-contained.j-contained-tabs" +        
    ".j-contained-tabs-place.j-browse-content.j-rc4" + 
    ".j-rc-none-top.clearfix");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.margin = '0';
    items[i].style.marginLeft = '15px';
    items[i].style.marginRight = '15px';
    }

  // Get rid of more whitespace.
  items =  
    document.querySelectorAll(
      ".j-layout-sl.j-browse-content .j-column-l");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginTop = '0';
    }

  // Get rid of more whitespace.
  items = document.querySelectorAll(".j-column-wrap-l");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginTop = '-20px';
    }

  // Stretch the browse controls almost across the entire width.
  items = 
    document.querySelectorAll(
      "#js-browse-controls .j-type-row .j-content-types");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.width = '95%';
    }

  // Put the view control back where it belongs.
  items = document.querySelectorAll("#j-item-view-toggle");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.float = 'right';
    items[i].style.marginTop = '0px';
    }

  // Remove more whitespace.
  items = document.querySelectorAll(".j-type-row");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginBottom = '0px';
    }

  // Fix the footer.
  items = document.querySelectorAll("#j-footer");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.margin = '0';
    items[i].style.width = 'auto';
    }
    
  items = document.querySelectorAll("#globaldisclaimer");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.borderTop = 'none';
    items[i].style.background = 'none';
    items[i].style.margin = '0';
    items[i].style.marginLeft = '15px';
    items[i].style.marginRight = '15px';
    items[i].style.width = 'auto';
    }

  items = document.querySelectorAll("#globalfooter");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.margin = '0';
    items[i].style.width = 'auto';
    items[i].style.padding = '15px';
    }

  items = document.querySelectorAll("#breadcrumbs");

  for(var i = 0; i < items.length; ++i)
    items[i].style.display = 'none';
  }
  
// Fix the actual content.
function fixContent()
  {
  // Make the table headers smaller. 
  var items = document.querySelectorAll("th");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.width = '20px';
    }

  // Make the date smaller.
  items = document.querySelectorAll(".j-browse-details .j-td-date");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.width = '15%';
    items[i].style.paddingTop = '0px';
    items[i].style.paddingBottom = '0px';
    }

  // Change the font size on the table.  
  items = document.querySelectorAll(".j-browse-details thead");

  // TODO: Turn this into a setting.
  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.fontSize = '12px';
    }

  // Find the thread titles.
  items = document.querySelectorAll(".j-td-icon");

  // Fix each title.
  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.paddingTop = '4px';
    items[i].style.paddingLeft = '8px';
    }
    
  // Find the thread titles.
  items = document.querySelectorAll(".j-td-title");

  // Fix each title.
  for(var i = 0; i < items.length; ++i)
    {
    var div = items[i].querySelector("div");

    // Set the fonts size for the titles.
    var a = items[i].querySelector("div a");

    // Set the font size.
    a.style.fontSize = settings.threadListFontSize + 'px';

    // Set the font colour.
    if(settings.threadListFontColour)
      a.style.color = settings.threadListFontColour;

    // Set the visited font colour, if applicable.
    if(settings.threadListVisitedFontColour)
      {
      var strong = a.querySelector("strong");
      
      if(!strong)
        a.style.color = settings.threadListVisitedFontColour;
      }
      
    // Apply SPAM settings.
    checkSPAM(div, a);
    }

  // Make room for the author in the date column.  
  items = document.querySelectorAll(".j-browse-details tr td");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.paddingBottom = '0';
    }

  // Show the author.
  items = 
    document.querySelectorAll(".j-browse-details .j-td-date > span");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.display = 'block';
    items[i].style.minWidth = '5px';
    }
  }

// Check for SPAM.
function checkSPAM(div, a)
  {
  if(respam && respam.test(a.textContent))
    {
    // Make the SPAM link
    var a_spam = 
      '<a class="ascpt_spam" ' +
      'style="color: red; font-weight: bold; cursor: pointer;">' +
      '[SPAM!] </a>';

    var SPAM = document.createElement('span');

    SPAM.innerHTML = a_spam;

    div.insertBefore(SPAM, a);

    var href = a.getAttribute('href');
    var objectID = href.slice(8);

    var abuse_link = 
      '/message-abuse!input.jspa?objectID=' + 
      objectID +
      '&objectType=1';

    var spamButton = document.querySelector('.ascpt_spam');

    if(spamButton)
      spamButton.onclick =
        function(event)
          {
          reportPost(abuse_link, objectID, 'Spam', 'This is SPAM.');
          };
    }
  }
  
// Handle threads.
function fixThread()
  {
  // Hide the Apple banner.
  hideAppleHeader();

  // Get all content.
  var items = document.querySelectorAll(".jive-rendered-content");
  
  for(var i = 0; i < items.length; ++i)
    {
    // Set the font size.
    items[i].style.fontSize = settings.threadFontSize + 'px';

    // Set the font colour.
    if(settings.threadFontColour)
      items[i].style.color = settings.threadFontColour;
    }

  // Fix the footer item in the header.
  items = document.querySelectorAll(".jive-content-footer-item");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.verticalAlign = 'inherit';
    }

  // Fix bottom margins.
  items = document.querySelectorAll(".apple-thread-header");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginBottom = '0';
    }

  // Fix bottom margins.
  items = document.querySelectorAll(".j-box");

  for(var i = 0; i < items.length; ++i)
    {
    items[i].style.marginBottom = '0';
    }
        
  // Look for changes to the DOM after things settle down.
  setTimeout(
    function()
      {
      document.addEventListener(
        'DOMSubtreeModified', handleDOMUpdateThread);
      },
    1000);
  }
  
// Handle a DOM update.
function handleDOMUpdateThread()
  {
  // If I already have a DOM Update timer pending, clear the timer.
  if(DOMUpdateTimeout)
    clearTimeout(DOMUpdateTimeout);
    
  // Start a new DOM update timer.
  DOMUpdateTimeout = setTimeout(updateDOMThread, 100);
  }
  
// Handle a DOM update to a thread.
function updateDOMThread()
  {
  var replying = false;
  
  var iframe = document.getElementById('wysiwygtext1_ifr');
  
  if(iframe)
    {
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    if(innerDoc)
      {
      var editor = innerDoc.getElementById('tinymce');
    
      if(editor)
        {
        // Set the font size.
        editor.style.fontSize = settings.threadFontSize + 'px';

        // Set the font colour.
        if(settings.threadFontColour)
          editor.style.color = settings.threadFontColour;

        // Stop listing for updates.
        document.removeEventListener(
          'DOMSubtreeModified', handleDOMUpdateThread);
          
        replying = true;
        }
      }
    }  
        
  if(!replying)
    return;
    
  var saveButton = 
    document.querySelector(".jive-reply-add-inline .jive-form-button-save");
  
  if(saveButton)
    {
    saveButton.onclick = 
      function(event)
        {
        // Start a new DOM update timer.
        setTimeout(fixThread, 2000);
        };
    }
  }
  
// Fix inbox.
function fixInbox()
  {
  // Find the thread titles.
  var items = document.querySelectorAll(".j-comm-entry");

  // Fix each title.
  for(var i = 0; i < items.length; ++i)
    {
    // Set the font size.
    items[i].style.fontSize = settings.threadListFontSize + 'px';

    // Set the font colour.
    if(settings.threadListFontColour)
      items[1].style.color = settings.threadListFontColour;
    }
  }

// Show the actions menu.
function showActionsMenu(event)
  {
  hideCategoriesMenu();

  if(actions.style.visibility == 'visible')
    hideActionsMenu();
    
  else
    {
    actions.style.visibility = 'visible';
    actions.style.opacity = '1';
    }
  }

// Hide the actions menu.
function hideActionsMenu()
  {
  actions.style.visibility = 'hidden';
  actions.style.opacity = '0';
  }
  
// Show the categories menu.
function showCategoriesMenu(event)
  {
  hideActionsMenu();

  if(categories.style.visibility == 'visible')
    hideCategoriesMenu();
    
  else
    {
    categories.style.visibility = 'visible';
    categories.style.opacity = '1';
    }
  }

// Hide the categories menu.
function hideCategoriesMenu()
  {
  categories.style.visibility = 'hidden';
  categories.style.opacity = '0';
  }
  
/* Get the position of an element. */
function getPosition(element) 
  {
  var xPosition = 0;
  var yPosition = 0;

  while(element) 
    {
    xPosition += 
      (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += 
      (element.offsetTop - element.scrollTop + element.clientTop);
  
    element = element.offsetParent;
    }

  return { x: xPosition, y: yPosition };
  }

// Copied and reformatted from http://stackoverflow.com/a/18078705
ajax.init = 
  function() 
    {
    return new XMLHttpRequest();  
    };

// Send an AJAX request.
ajax.send = 
  function(url, callback, method, data, sync, headers) 
    {
    var self = ajax.init();

    self.open(method, url, sync);

    self.onreadystatechange = 
      function() 
        {
        if(self.readyState == 4)
          callback(self.responseText)
        };
    
    if(method == 'POST')
      self.setRequestHeader(
        'Content-type', 'application/x-www-form-urlencoded');

    if(headers)
      for(var key in headers)
        self.setRequestHeader(key, headers[key]);
        
    self.send(data);
    };

// Send an AJAX request via GET.
ajax.get = 
  function(url, data, callback, sync) 
    {
    var query = [];

    for(var key in data)
      query.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));

    var full_url = url;
    var query_string = query.join('&');

    if(query_string != '')
      full_url = full_url + '?' + query_string;
  
    ajax.send(full_url, callback, 'GET', null, sync)
    };

// Send an AJAX request via POST.
ajax.post = 
  function(url, data, callback, sync, headers) 
    {
    var query = [];

    for(var key in data)
      query.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));

    ajax.send(url, callback, 'POST', query.join('&'), sync, headers)
    };
