

/*
* Toggle Menu when document is loaded
**/
document.addEventListener("DOMContentLoaded", function(event) {

    toggleMenu();
    loadLinks();
});


/**
 * Generate Navigation for 
 * sidebar dinamycally
 */
function loadLinks(){
    var linkloader = document.getElementById('sidebar-loader');

    let linksHolder = new LinkElements();

    linksHolder.addHeader('<i class="fa fa-plug" aria-hidden="true"></i> Getting Started')
                .addLink('about.html', 'About Ness PHP Framework')
                .addLink('installation.html', 'Installation Instructions')
                .addLink('installation.html#requirements', 'Server Requirements')
                .addLink('structure.html', 'Project Structure')
                .addLink('configuration.html', 'Project Configuration')
                .addLink('configuration.html#maintenance', 'Enable &amp; Design Maintenance Mode')
                .addLink('licence.html', 'Licence')

                .addPseudoElement()
                .addHeader('<i class="fa fa-tags" aria-hidden="true"></i> General Topics')
                .addLink('controllers.html', 'Controllers')
                .addLink('views.html', 'Views')
                .addLink('models.html', 'Models')
                .addLink('masterpage.html', 'Master Pages')
                .addLink('redirections.html', 'Redirections')
                .addLink('areas.html', 'Create Area')
                
                .addPseudoElement()
                .addHeader('<i class="fa fa-cubes" aria-hidden="true"></i> Classes')
                .addLink('omaps.html', 'Object Mappers')
                .addLink('pinchecker.html', 'Pin Checker Class')
                .addLink('filesystem.html', 'FileSystem Class')
                .addLink('specialdirs.html', 'Special Directories')
                .addLink('logs.html', 'Using Logger Class')
                .addLink('rolemanager.html', 'Role Manager &amp; Role Provider')
                .addLink('library.html', 'Running 3rd party codes')
                .addLink('ftp.html', 'FTP Class')
                .addLink('benchmark.html', 'Benchmarking Class')
                .addLink('session.html', 'Session Management')
                .addLink('cookie.html', 'Cookie Management')
                .addLink('table.html', 'Creating HTML tables')
                .addLink('tags.html', 'Using HTML Tags')


                .addPseudoElement()
                .addHeader('<i class="fa fa-folder-open" aria-hidden="true"></i> Content Manager')
                .addLink('contentmanager.html', 'About Content Manager')
                .addLink('contentmanager.html#directories', 'Directories for Contents')
                .addLink('contentmanager.html#diffrence', 'Diffrences between Content Manager &amp; Resource Management')
                .addLink('contentmanager.html#methods', 'Methods for Content Manager')
                

                .addPseudoElement()
                .addHeader('<i class="fa fa-flask" aria-hidden="true"></i> Resource Management')
                .addLink('resources.html', 'About Resources')
                .addLink('resources.html#enable', 'Enable Resources')
                .addLink('resources.html#types', 'Resource Types &amp; Definitions')
                .addLink('resources.html#methods', 'Methods for Resource Management')


                .addPseudoElement()
                .addHeader('<i class="fa fa-server" aria-hidden="true"></i> Database')
                .addLink('mysql.html', 'MySql Database Connection')
                .addLink('mysqlcommand.html', 'Running MySql Queries')
                .addLink('dbconnect.html', 'Connecting &amp; Using other database')
                .addLink('autopulse.html', 'Autopulse; A simple crud library')
                .addLink('querybuilder.html', 'Query Builder Class')
                .addLink('migrations.html', 'Database Migrations')

                .addPseudoElement()
                .addHeader('<i class="fa fa-check-square" aria-hidden="true"></i> Forms')
                .addLink('forms.html', 'Creating Forms')
                .addLink('forms.html#elements', 'Form Elements')
                .addLink('forms.html#example', 'Send Form data to Model')
                .addLink('fileupload.html', 'File Uploads')
                .addLink('forms.html#csrf_protection', 'CSRF &amp; XSS Protection')


                .addPseudoElement()
                .addHeader('<i class="fa fa-cogs" aria-hidden="true"></i> Helper Classes')
                .addLink('language.html', 'Create Multilanguage Apps')
                .addLink('datasize.html', 'DataSize Helper')
                .addLink('arrays.html', 'Array Helper')
                .addLink('strings.html', 'String Helper')
    linkloader.innerHTML = linksHolder.generate();
}

/**
 * Toogle Menu
 */
function toggleMenu(){
    document.getElementById("sidebarCollapse").addEventListener("click", function(){
        document.getElementById("sidebar").classList.toggle('active');
        document.getElementById("content").classList.toggle('active');
    });
}




/**
 * Side menu link builder class
 */
class LinkElements{
    wrapper;
    constructor(){
        this.wrapper = '';
    }


    addHeader(title) {
        this.wrapper  = this.wrapper + '<h4>'+title+'</h4>'
        return this;
    }

    addLink(href, title){

        var url = window.location.href;

        this.wrapper = this.wrapper + '<a href="'+href+'">'+title+'</a>';
        return this;
    }

    addPseudoElement(){
        this.wrapper = this.wrapper + '<div class="pseudo"></div>';
        return this;
    }
    
    basename(path) {
        return path.replace(/.*\//, '');
    }

    generate(){
        return this.wrapper;
    }
}