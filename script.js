
(function ($) {
  // this array should be data grabbed from db instead
  let courses = [
    // course group 1
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay cert-program'><h3>Lorem Ipsum</h3><p>Semester</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay cert-program'><h3>Lorem Ipsum</h3><p>Elective</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay cert-program'><h3>Lorem Ipsum</h3><p>Semester</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay cert-program'><h3>Lorem Ipsum</h3><p>Semester</p></div></article></a>" +
      "</div>",
    // course group 2
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem2</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "</div>",
    // course group 3
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem3</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "</div>",
    // course group 4
    "<div class='courses'>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem4</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "<a href='#'><article><div class='course-overlay elective'><h3>Lorem</h3><p>Lorem</p></div></article></a>" +
      "</div>",
  ];

  let browse_all_courses =
    "<a href='#' class='more-btn'>Browse All Courses <i class='fas fa-chevron-right fa-xs'></i></a>";

  let mobile_options = [document.querySelectorAll("[data-option-mobile]")];
  let desktop_options = [document.querySelectorAll("[data-option-desktop]")];
  let tabs = [document.querySelectorAll("[data-tab]")];
  let tab_text = [document.querySelectorAll("[data-tab-text]")];

  for (let i = 0; i < mobile_options[0].length; i++) {
    // insert course variabls to options (should switch this to createElement()s, and insert data as variable object parts)
    $(desktop_options[0][i])
      .add(mobile_options[0][i])
      .html(courses[i]);

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
