"use strict";

function onInitPage() {
  renderProjects();
  renderModal()
}

function renderProjects() {
  var projects = getProjectsForDisplay();
  var projectStrHtml;
  projectStrHtml = projects.map(project => {
    return `        <div class="col-md-4 col-sm-6 portfolio-item">
    
        <a class="portfolio-link" data-toggle="modal" href="#modal${project.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/${project.name}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>Threads</h4>
          <p class="text-muted">Illustration</p>
        </div>
      </div>`;
  });
  document.querySelector("#portfolio").innerHTML = projectStrHtml.join("");
}

function renderModal() {
  var projects = getProjectsForDisplay();
  var projectStrHtml;
  projectStrHtml = projects.map(project => {
    return ` <div class="portfolio-modal modal fade" id="modal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">${project.title}.</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                  <p>${project.desc}</p>
                  <ul class="list-inline">
                    <li>Date: ${project.publishedAt}</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>`
      ;
  });

  
  console.log(projectStrHtml);
  
  document.querySelector(".modals").innerHTML = projectStrHtml.join("");

}

function onSubmitForm(){
  var values=getFormValues()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${values.email}&su=${values.name}&body=${values.message}`,"_blank")

}






