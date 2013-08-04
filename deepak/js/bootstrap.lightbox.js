


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Lightbox-for-Bootstrap/js/bootstrap.lightbox.js at master · djinteractive/Lightbox-for-Bootstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe16.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="3020845" name="octolytics-actor-id" /><meta content="debug12" name="octolytics-actor-login" /><meta content="684bc6405f9d6d7792e5f583061a0027f35d64325a55f13a7599f1e05abbe95e" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="/XTU2SdB8rDi50qgW1CHjFD+NYjHdH40zQiojFsgiME=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-c6ca95663cba6496fe7a5bdd98671b82cd956df3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d35b02ba3940bde9b9f2c3e58f2dfb1ceff5886c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-9339835a99ecd32fb1a6de9d7d9bf56f272a0b39.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="7bb0bd2d60adf37e0211fafb1d0d1ba9">

        <link data-pjax-transient rel='permalink' href='/djinteractive/Lightbox-for-Bootstrap/blob/467e308f93929a37e70e6d18ace68cd1a65b5e07/js/bootstrap.lightbox.js'>
  <meta property="og:title" content="Lightbox-for-Bootstrap"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/djinteractive/Lightbox-for-Bootstrap"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Lightbox-for-Bootstrap - A lightbox plugin for Bootstrap that just works"/>

  <meta name="description" content="Lightbox-for-Bootstrap - A lightbox plugin for Bootstrap that just works" />

  <meta content="385419" name="octolytics-dimension-user_id" /><meta content="djinteractive" name="octolytics-dimension-user_login" /><meta content="9170065" name="octolytics-dimension-repository_id" /><meta content="djinteractive/Lightbox-for-Bootstrap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="2587583" name="octolytics-dimension-repository_parent_id" /><meta content="lokesh/lightbox2" name="octolytics-dimension-repository_parent_nwo" /><meta content="2587583" name="octolytics-dimension-repository_network_root_id" /><meta content="lokesh/lightbox2" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/djinteractive/Lightbox-for-Bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to Lightbox-for-Bootstrap:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public fork env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="debug12"
      data-repo="djinteractive/Lightbox-for-Bootstrap"
      data-branch="master"
      data-sha="b843e13985df511c31bd3cbfda5ef209e9872665"
  >

    <input type="hidden" name="nwo" value="djinteractive/Lightbox-for-Bootstrap" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/debug12" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/728a4c4eb1f6aca2c263827b92e4ca81?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> debug12
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings "
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="djinteractive/Lightbox-for-Bootstrap">This repository</span>
    </li>
    <li>
      <a href="/djinteractive/Lightbox-for-Bootstrap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="/XTU2SdB8rDi50qgW1CHjFD+NYjHdH40zQiojFsgiME=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="9170065" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/djinteractive/Lightbox-for-Bootstrap/watchers">
          1
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/djinteractive/Lightbox-for-Bootstrap/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/djinteractive/Lightbox-for-Bootstrap/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/djinteractive/Lightbox-for-Bootstrap/stargazers">9</a>
</div>

  </li>


        <li>
          <a href="/djinteractive/Lightbox-for-Bootstrap/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/djinteractive/Lightbox-for-Bootstrap/network" class="social-count">321</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author">
            <a href="/djinteractive" class="url fn" itemprop="url" rel="author"><span itemprop="title">djinteractive</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/djinteractive/Lightbox-for-Bootstrap" class="js-current-repository js-repo-home-link">Lightbox-for-Bootstrap</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/lokesh/lightbox2">lokesh/lightbox2</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/djinteractive/Lightbox-for-Bootstrap" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /djinteractive/Lightbox-for-Bootstrap">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/djinteractive/Lightbox-for-Bootstrap/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /djinteractive/Lightbox-for-Bootstrap/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/djinteractive/Lightbox-for-Bootstrap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /djinteractive/Lightbox-for-Bootstrap/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/djinteractive/Lightbox-for-Bootstrap/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /djinteractive/Lightbox-for-Bootstrap/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/djinteractive/Lightbox-for-Bootstrap/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /djinteractive/Lightbox-for-Bootstrap/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/djinteractive/Lightbox-for-Bootstrap/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /djinteractive/Lightbox-for-Bootstrap/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/djinteractive/Lightbox-for-Bootstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/djinteractive/Lightbox-for-Bootstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:djinteractive/Lightbox-for-Bootstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:djinteractive/Lightbox-for-Bootstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/djinteractive/Lightbox-for-Bootstrap" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/djinteractive/Lightbox-for-Bootstrap" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/djinteractive/Lightbox-for-Bootstrap" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/djinteractive/Lightbox-for-Bootstrap/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e19f743b8332073531c7530e8bb3f76c -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:e19f743b8332073531c7530e8bb3f76c -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/djinteractive/Lightbox-for-Bootstrap/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/djinteractive/Lightbox-for-Bootstrap/blob/master/js/bootstrap.lightbox.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/djinteractive/Lightbox-for-Bootstrap/blob/prototype/js/bootstrap.lightbox.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="prototype" data-skip-pjax="true" rel="nofollow" title="prototype">prototype</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/djinteractive/Lightbox-for-Bootstrap/blob/v2.05-newdemopage/js/bootstrap.lightbox.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.05-newdemopage" data-skip-pjax="true" rel="nofollow" title="v2.05-newdemopage">v2.05-newdemopage</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/djinteractive/Lightbox-for-Bootstrap/blob/v2.05/js/bootstrap.lightbox.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.05" data-skip-pjax="true" rel="nofollow" title="v2.05">v2.05</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/djinteractive/Lightbox-for-Bootstrap/blob/v2.5-no-ie8-support/js/bootstrap.lightbox.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5-no-ie8-support" data-skip-pjax="true" rel="nofollow" title="v2.5-no-ie8-support">v2.5-no-ie8-support</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/djinteractive/Lightbox-for-Bootstrap/blob/v2.5-ie8fixed/js/bootstrap.lightbox.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5-ie8fixed" data-skip-pjax="true" rel="nofollow" title="v2.5-ie8fixed">v2.5-ie8fixed</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/djinteractive/Lightbox-for-Bootstrap" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Lightbox-for-Bootstrap</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/djinteractive/Lightbox-for-Bootstrap/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap.lightbox.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/bootstrap.lightbox.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/686b1ebd210884a4fb87e862792e92a3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">Dan Jones</span></span>
    <time class="js-relative-date" datetime="2013-04-03T14:54:55-07:00" title="2013-04-03 14:54:55">April 03, 2013</time>
    <div class="commit-title">
        <a href="/djinteractive/Lightbox-for-Bootstrap/commit/467e308f93929a37e70e6d18ace68cd1a65b5e07" class="message" data-pjax="true" title="Add support for image descriptions

Descriptions can now be added to the images. The loading graphic now displays correctly when navigating between images. I&#39;ve also updated the lightbox design to clearly show the image information. The close button has also been improved to be more user friendly and removed the need for the image.">Add support for image descriptions</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>384 lines (339 sloc)</span>
        <span>23.963 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/djinteractive/Lightbox-for-Bootstrap/edit/master/js/bootstrap.lightbox.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/djinteractive/Lightbox-for-Bootstrap/raw/master/js/bootstrap.lightbox.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/djinteractive/Lightbox-for-Bootstrap/blame/master/js/bootstrap.lightbox.js" class="button minibutton ">Blame</a>
          <a href="/djinteractive/Lightbox-for-Bootstrap/commits/master/js/bootstrap.lightbox.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/djinteractive/Lightbox-for-Bootstrap/delete/master/js/bootstrap.lightbox.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// Generated by CoffeeScript 1.6.2</span></div><div class='line' id='LC2'><span class="cm">/*</span></div><div class='line' id='LC3'><span class="cm">Lightbox for Bootstrap</span></div><div class='line' id='LC4'><span class="cm">by Dan Jones - http://djinteractive.co.uk</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">Attribution</span></div><div class='line' id='LC7'><span class="cm">=================</span></div><div class='line' id='LC8'><span class="cm">Forked from Lightbox v2.51 - http://lokeshdhakar.com/projects/lightbox2/</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">Thanks</span></div><div class='line' id='LC11'><span class="cm">- Scott Upton(uptonic.com), Peter-Paul Koch(quirksmode.com), and Thomas Fuchs(mir.aculo.us) for ideas, libs, and snippets.</span></div><div class='line' id='LC12'><span class="cm">- Artemy Tregubenko (arty.name) for cleanup and help in updating to latest proto-aculous in v2.05.</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/</span></div><div class='line' id='LC15'><span class="cm">- free for use in both personal and commercial projects</span></div><div class='line' id='LC16'><span class="cm">- attribution requires leaving author name, author link, and the license info intact</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="cm">Table of Contents</span></div><div class='line' id='LC20'><span class="cm">=================</span></div><div class='line' id='LC21'><span class="cm">LightboxOptions</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="cm">Lightbox</span></div><div class='line' id='LC24'><span class="cm">- constructor</span></div><div class='line' id='LC25'><span class="cm">- init</span></div><div class='line' id='LC26'><span class="cm">- enable</span></div><div class='line' id='LC27'><span class="cm">- build</span></div><div class='line' id='LC28'><span class="cm">- start</span></div><div class='line' id='LC29'><span class="cm">- changeImage</span></div><div class='line' id='LC30'><span class="cm">- sizeContainer</span></div><div class='line' id='LC31'><span class="cm">- showImage</span></div><div class='line' id='LC32'><span class="cm">- updateNav</span></div><div class='line' id='LC33'><span class="cm">- updateDetails</span></div><div class='line' id='LC34'><span class="cm">- preloadNeigbhoringImages</span></div><div class='line' id='LC35'><span class="cm">- enableKeyboardNav</span></div><div class='line' id='LC36'><span class="cm">- disableKeyboardNav</span></div><div class='line' id='LC37'><span class="cm">- keyboardAction</span></div><div class='line' id='LC38'><span class="cm">- end</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><span class="cm">options = new LightboxOptions</span></div><div class='line' id='LC41'><span class="cm">lightbox = new Lightbox options</span></div><div class='line' id='LC42'><span class="cm">*/</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$</span><span class="p">,</span> <span class="nx">Lightbox</span><span class="p">,</span> <span class="nx">LightboxOptions</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">$</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">;</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="nx">LightboxOptions</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">LightboxOptions</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileLoadingImage</span> <span class="o">=</span> <span class="s2">&quot;data:image/gif;base64,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&quot;</span><span class="p">;</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">resizeDuration</span> <span class="o">=</span> <span class="mi">700</span><span class="p">;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fadeDuration</span> <span class="o">=</span> <span class="mi">500</span><span class="p">;</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">labelImage</span> <span class="o">=</span> <span class="s2">&quot;Image&quot;</span><span class="p">;</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">labelOf</span> <span class="o">=</span> <span class="s2">&quot;of&quot;</span><span class="p">;</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">LightboxOptions</span><span class="p">;</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="p">})();</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>&nbsp;&nbsp;<span class="nx">Lightbox</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Lightbox</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">album</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">enable</span><span class="p">();</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">build</span><span class="p">();</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">enable</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_this</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="s2">&quot;.thumbnails[data-toggle^=lightbox] .thumbnail&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">));</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">build</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$lightbox</span><span class="p">,</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;lightboxOverlay&quot;</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">));</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;lightbox&quot;</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-outerContainer&quot;</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;button/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;close&quot;</span><span class="p">,</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;button&quot;</span><span class="p">,</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;aria-hidden&quot;</span><span class="o">:</span> <span class="s2">&quot;true&quot;</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">html</span><span class="p">(</span><span class="s2">&quot;&amp;times;&quot;</span><span class="p">),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-container&quot;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;img/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-image&quot;</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-nav&quot;</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;a/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-prev&quot;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;a/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-next&quot;</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-loader&quot;</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;a/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-cancel&quot;</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;img/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fileLoadingImage</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})))),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-dataContainer&quot;</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-data&quot;</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;h4/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-caption&quot;</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;p/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-description&quot;</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;p/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;close&quot;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">text</span><span class="p">(</span><span class="s2">&quot;close&quot;</span><span class="p">),</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;p/&gt;&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;class&quot;</span><span class="o">:</span> <span class="s2">&quot;lb-number&quot;</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}))))).</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">));</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightboxOverlay&quot;</span><span class="p">).</span><span class="nx">hide</span><span class="p">().</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">hide</span><span class="p">().</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;lightbox&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-outerContainer&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;lightbox&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-prev&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">changeImage</span><span class="p">(</span><span class="nx">_this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-next&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">changeImage</span><span class="p">(</span><span class="nx">_this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-loader, .close&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$lightbox</span><span class="p">,</span> <span class="nx">$window</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">current</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">imageNumber</span><span class="p">,</span> <span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">_i</span><span class="p">,</span> <span class="nx">_len</span><span class="p">,</span> <span class="nx">_ref</span><span class="p">;</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">sizeOverlay</span><span class="p">);</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;select, object, embed&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibility</span><span class="o">:</span> <span class="s2">&quot;hidden&quot;</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightboxOverlay&quot;</span><span class="p">).</span><span class="nx">width</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">width</span><span class="p">()).</span><span class="nx">height</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">height</span><span class="p">()).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fadeDuration</span><span class="p">);</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">album</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageNumber</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$link</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s2">&quot;.thumbnails&quot;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-toggle&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;lightbox&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s2">&quot;.thumbnails&quot;</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.thumbnail&quot;</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_ref</span> <span class="o">=</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s2">&quot;.thumbnails&quot;</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.thumbnail&quot;</span><span class="p">);</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">_i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">_len</span> <span class="o">=</span> <span class="nx">_ref</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">_i</span> <span class="o">&lt;</span> <span class="nx">_len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">=</span> <span class="o">++</span><span class="nx">_i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">_ref</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">),</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;title&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-title&quot;</span><span class="p">),</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">description</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-description&quot;</span><span class="p">)</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageNumber</span> <span class="o">=</span> <span class="nx">current</span><span class="p">;</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">++</span><span class="nx">current</span><span class="p">;</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-target&quot;</span><span class="p">),</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;title&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-title&quot;</span><span class="p">),</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">description</span><span class="o">:</span> <span class="nx">$link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-description&quot;</span><span class="p">)</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$window</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">);</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">top</span> <span class="o">=</span> <span class="nx">$window</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">()</span> <span class="o">+</span> <span class="nx">$window</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="o">/</span> <span class="mi">10</span><span class="p">;</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">left</span> <span class="o">=</span> <span class="nx">$window</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">();</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">top</span><span class="o">:</span> <span class="nx">top</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">,</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">left</span><span class="o">:</span> <span class="nx">left</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fadeDuration</span><span class="p">);</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">changeImage</span><span class="p">(</span><span class="nx">imageNumber</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">changeImage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">imageNumber</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$image</span><span class="p">,</span> <span class="nx">$lightbox</span><span class="p">,</span> <span class="nx">preloader</span><span class="p">,</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">disableKeyboardNav</span><span class="p">();</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$image</span> <span class="o">=</span> <span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-image&quot;</span><span class="p">);</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sizeOverlay</span><span class="p">();</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightboxOverlay&quot;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fadeDuration</span><span class="p">);</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.lb-loader&quot;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="s2">&quot;slow&quot;</span><span class="p">);</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption, .lb-description&quot;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-outerContainer&quot;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;animating&quot;</span><span class="p">);</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloader</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Image</span><span class="p">;</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloader</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$image</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">,</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="nx">imageNumber</span><span class="p">].</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$image</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">preloader</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$image</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">preloader</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">sizeContainer</span><span class="p">(</span><span class="nx">preloader</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">preloader</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloader</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="nx">imageNumber</span><span class="p">].</span><span class="nx">link</span><span class="p">;</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">=</span> <span class="nx">imageNumber</span><span class="p">;</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sizeOverlay</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightboxOverlay&quot;</span><span class="p">).</span><span class="nx">width</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">width</span><span class="p">()).</span><span class="nx">height</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">height</span><span class="p">());</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sizeContainer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">imageWidth</span><span class="p">,</span> <span class="nx">imageHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$container</span><span class="p">,</span> <span class="nx">$lightbox</span><span class="p">,</span> <span class="nx">$outerContainer</span><span class="p">,</span> <span class="nx">containerBottomPadding</span><span class="p">,</span> <span class="nx">containerLeftPadding</span><span class="p">,</span> <span class="nx">containerRightPadding</span><span class="p">,</span> <span class="nx">containerTopPadding</span><span class="p">,</span> <span class="nx">newHeight</span><span class="p">,</span> <span class="nx">newWidth</span><span class="p">,</span> <span class="nx">oldHeight</span><span class="p">,</span> <span class="nx">oldWidth</span><span class="p">,</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$outerContainer</span> <span class="o">=</span> <span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-outerContainer&quot;</span><span class="p">);</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldWidth</span> <span class="o">=</span> <span class="nx">$outerContainer</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">();</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldHeight</span> <span class="o">=</span> <span class="nx">$outerContainer</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">();</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span> <span class="o">=</span> <span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-container&quot;</span><span class="p">);</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">containerTopPadding</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$container</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;padding-top&quot;</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">containerRightPadding</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$container</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;padding-right&quot;</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">containerBottomPadding</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$container</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;padding-bottom&quot;</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">containerLeftPadding</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$container</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;padding-left&quot;</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">newWidth</span> <span class="o">=</span> <span class="nx">imageWidth</span> <span class="o">+</span> <span class="nx">containerLeftPadding</span> <span class="o">+</span> <span class="nx">containerRightPadding</span><span class="p">;</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">newHeight</span> <span class="o">=</span> <span class="nx">imageHeight</span> <span class="o">+</span> <span class="nx">containerTopPadding</span> <span class="o">+</span> <span class="nx">containerBottomPadding</span><span class="p">;</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">newWidth</span> <span class="o">!==</span> <span class="nx">oldWidth</span> <span class="o">&amp;&amp;</span> <span class="nx">newHeight</span> <span class="o">!==</span> <span class="nx">oldHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$outerContainer</span><span class="p">.</span><span class="nx">animate</span><span class="p">({</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span> <span class="nx">newWidth</span><span class="p">,</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="nx">newHeight</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeDuration</span><span class="p">,</span> <span class="s2">&quot;swing&quot;</span><span class="p">);</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">newWidth</span> <span class="o">!==</span> <span class="nx">oldWidth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$outerContainer</span><span class="p">.</span><span class="nx">animate</span><span class="p">({</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span> <span class="nx">newWidth</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeDuration</span><span class="p">,</span> <span class="s2">&quot;swing&quot;</span><span class="p">);</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">newHeight</span> <span class="o">!==</span> <span class="nx">oldHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$outerContainer</span><span class="p">.</span><span class="nx">animate</span><span class="p">({</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="nx">newHeight</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeDuration</span><span class="p">,</span> <span class="s2">&quot;swing&quot;</span><span class="p">);</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-dataContainer&quot;</span><span class="p">).</span><span class="nx">width</span><span class="p">(</span><span class="nx">newWidth</span><span class="p">);</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-prevLink&quot;</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span><span class="nx">newHeight</span><span class="p">);</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-nextLink&quot;</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span><span class="nx">newHeight</span><span class="p">);</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span><span class="p">.</span><span class="nx">showImage</span><span class="p">();</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeDuration</span><span class="p">);</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">showImage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$lightbox</span><span class="p">;</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-loader&quot;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-image&quot;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="s2">&quot;slow&quot;</span><span class="p">);</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">updateNav</span><span class="p">();</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">updateDetails</span><span class="p">();</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">preloadNeighboringImages</span><span class="p">();</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">enableKeyboardNav</span><span class="p">();</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">updateNav</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$lightbox</span><span class="p">;</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-nav&quot;</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-prev&quot;</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-next&quot;</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">updateDetails</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$lightbox</span><span class="p">,</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_this</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">);</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span><span class="p">].</span><span class="nx">title</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span><span class="p">].</span><span class="nx">title</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;h4&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span><span class="p">].</span><span class="nx">title</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="s2">&quot;fast&quot;</span><span class="p">);</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span><span class="p">].</span><span class="nx">description</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span><span class="p">].</span><span class="nx">description</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-description&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span><span class="p">].</span><span class="nx">description</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="s2">&quot;fast&quot;</span><span class="p">);</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-number&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">labelImage</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">labelOf</span> <span class="o">+</span> <span class="s2">&quot;  &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">length</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="s2">&quot;fast&quot;</span><span class="p">);</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-number&quot;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-outerContainer&quot;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;animating&quot;</span><span class="p">);</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$lightbox</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.lb-dataContainer&quot;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">resizeDuration</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">sizeOverlay</span><span class="p">();</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">preloadNeighboringImages</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">preloadNext</span><span class="p">,</span> <span class="nx">preloadPrev</span><span class="p">;</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloadNext</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Image</span><span class="p">;</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloadNext</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">].</span><span class="nx">link</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloadPrev</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Image</span><span class="p">;</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preloadPrev</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">-</span> <span class="mi">1</span><span class="p">].</span><span class="nx">link</span><span class="p">;</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">enableKeyboardNav</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;keyup.keyboard&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">keyboardAction</span><span class="p">,</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disableKeyboardNav</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;.keyboard&quot;</span><span class="p">);</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">keyboardAction</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">KEYCODE_ESC</span><span class="p">,</span> <span class="nx">KEYCODE_LEFTARROW</span><span class="p">,</span> <span class="nx">KEYCODE_RIGHTARROW</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">keycode</span><span class="p">;</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">KEYCODE_ESC</span> <span class="o">=</span> <span class="mi">27</span><span class="p">;</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">KEYCODE_LEFTARROW</span> <span class="o">=</span> <span class="mi">37</span><span class="p">;</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">KEYCODE_RIGHTARROW</span> <span class="o">=</span> <span class="mi">39</span><span class="p">;</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keycode</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">;</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">keycode</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">keycode</span> <span class="o">===</span> <span class="nx">KEYCODE_ESC</span> <span class="o">||</span> <span class="nx">key</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/x|o|c/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">===</span> <span class="s2">&quot;p&quot;</span> <span class="o">||</span> <span class="nx">keycode</span> <span class="o">===</span> <span class="nx">KEYCODE_LEFTARROW</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">changeImage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">===</span> <span class="s2">&quot;n&quot;</span> <span class="o">||</span> <span class="nx">keycode</span> <span class="o">===</span> <span class="nx">KEYCODE_RIGHTARROW</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">album</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">changeImage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currentImageIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Lightbox</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">disableKeyboardNav</span><span class="p">();</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">sizeOverlay</span><span class="p">);</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightbox&quot;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fadeDuration</span><span class="p">);</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#lightboxOverlay&quot;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fadeDuration</span><span class="p">);</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;select, object, embed&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibility</span><span class="o">:</span> <span class="s2">&quot;visible&quot;</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Lightbox</span><span class="p">;</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'>&nbsp;&nbsp;<span class="p">})();</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lightbox</span><span class="p">,</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">LightboxOptions</span><span class="p">;</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">lightbox</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Lightbox</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC381'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'><span class="p">}).</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07445s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/djinteractive/Lightbox-for-Bootstrap/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

