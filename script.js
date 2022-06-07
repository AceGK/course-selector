(function ($) {
  // should be pulle from db instead of in array
  let courses = [
    // course group 1
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 1</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 2</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 3</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 4</h3><p>Lorem</p></div></article></a>" +
      "</div>",
    // course group 2
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 5</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 6</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 7</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 8</h3><p>Lorem</p></div></article></a>" +
      "</div>",
    // course group 3
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 9</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 10</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 11</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 12</h3><p>Lorem</p></div></article></a>" +
      "</div>",
    // course group 4
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 13</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 14</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 15</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay category1'><h3>Lorem 16</h3><p>Lorem</p></div></article></a>" +
      "</div>",
  ];

  let browse_all_courses =
    "<a href='#' class='more-btn'>Browse All <i class='fas fa-chevron-right fa-xs'></i></a>";

  let mobile_options = [document.querySelectorAll("[data-option-mobile]")];
  let desktop_options = [document.querySelectorAll("[data-option-desktop]")];
  let tabs = [document.querySelectorAll("[data-tab]")];
  let tab_text = [document.querySelectorAll("[data-tab-text]")];

  for (let i = 0; i < mobile_options[0].length; i++) {
    // insert course variables to options (should switch this to createElement()s, and insert data as variable object parts)
    $(desktop_options[0][i]).add(mobile_options[0][i]).html(courses[i]);

    // show 'browse all courses' btn to course-options
    $(desktop_options[0][i])
      .add(mobile_options[0][i])
      .append(browse_all_courses);

    // add click event to tabs, show/hide course options and tab's additional text
    for (let z = 0; z < tabs[0].length; z++) {
      tabs[0][z].addEventListener("click", () => {
        $(desktop_options[0][i])
          .add(mobile_options[0][i])
          .add(tab_text[0][i])
          .hide();
        $(desktop_options[0][z])
          .add(mobile_options[0][z])
          .add(tab_text[0][z])
          .show();
      });
    }
  }
})(jQuery);
