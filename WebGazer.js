<!DOCTYPE html>
<!-- saved from url=(0030)https://webgazer.cs.brown.edu/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">

		<title>WebGazer.js: Democratizing Webcam Eye Tracking on the Browser</title>

		<!-- Bootstrap core CSS -->
		<link href="./WebGazer_files/bootstrap.min.css" rel="stylesheet">

		<link rel="stylesheet" href="./WebGazer_files/default.css">
		<script src="./WebGazer_files/highlight.pack.js.다운로드"></script>
		<script>hljs.initHighlightingOnLoad();</script>
		<link rel="stylesheet" href="./WebGazer_files/main.css">
	</head>


	<body data-spy="scroll" data-target="#navbar">

		<!-- Fixed navbar -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="navbar-toggler-icon"></span>
					</button>
					<a class="navbar-brand" href="https://webgazer.cs.brown.edu/#">WebGazer.js</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li class="nav-item active"><a class="nav-link" href="https://webgazer.cs.brown.edu/#home">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#video">About</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#usage">Usage</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#compatibility">Compatibility</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#download">Download</a></li>
						<li class="nav-item"><a class="nav-link" href="https://github.com/brownhci/WebGazer">GitHub</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#examples">Examples</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#publication">Publications</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#press">Press</a></li>
						<li class="nav-item"><a class="nav-link" href="https://webgazer.cs.brown.edu/#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="container mt-3">
		<div class="alert alert-warning" role="alert">
			As of February 24, 2026, WebGazer is fully functional and works as intended, but updates are no longer guaranteed. It has been open source for over 10 years, since February 2016, so this seems like a sufficient period for official support. Community support continues to be available via <a href="https://github.com/brownhci/WebGazer/issues" class="alert-link">GitHub Issues</a>
		</div>
	</div>

	<div id="home" style="padding-top: 0px">
			<div class="py-3 py-sm-5 px-sm-3">
				<h1 class="text-center mt-3" style="margin-bottom:20px"> WebGazer.js </h1>
				<h2 class="text-center mb-3"> Democratizing Webcam Eye Tracking on the Browser</h2>
			</div>
			<div id="description" class="container">
				<p class="text-justify">
					WebGazer.js is an eye tracking library that uses common webcams to infer the eye-gaze locations of web visitors on a page in real time. The eye tracking model it contains self-calibrates by watching web visitors interact with the web page and trains a mapping between the features of the eye and positions on the screen. WebGazer.js is written entirely in JavaScript and with only a few lines of code can be integrated in any website that wishes to better understand
					their visitors and transform their user experience. WebGazer.js runs entirely in the client browser, so no video data needs to be sent to a server, and it requires the user's consent to access their webcam.
				</p>
			</div>

			<hr class="featurette-divider">

			<div id="video" class="container p-4">
				<div class="row">
					<div class="col-sm-7">
						<div class="embed-responsive embed-responsive-16by9">
						  <iframe width="560" height="315" src="./WebGazer_files/NRLlRh2apA8.html" frameborder="0" allowfullscreen=""></iframe>
						</div>
					</div>
					<div class="col-sm-5">
						<div>
							<p class="text-left padright" style="font-size:18px">Real time gaze prediction on most common browsers</p>
							<p class="text-left padright" style="font-size:18px">No special hardware; WebGazer.js uses your webcam</p>
							<p class="text-left padright" style="font-size:18px">Self-calibration from clicks and cursor movements</p>
							<p class="text-left padright" style="font-size:18px">Easy to integrate with a few lines of JavaScript</p>
							<p class="text-left padright" style="font-size:18px">Swappable components for eye detection</p>
							<p class="text-left padright" style="font-size:18px">Multiple gaze prediction models</p>
							<p class="text-left padright" style="font-size:18px">Open source since 2016 (over 10 years)</p>
						</div>
					</div>
				</div>

			</div>

		</div>
		<hr class="featurette-divider">

		<div id="usage" class="container pad">
			<h2 class="text-center">Usage</h2>
			<div class="row">
				<div class="col-lg-12">
					To use WebGazer.js you need to add the webgazer.js file as a script in your website:
					<pre><code class="html hljs xml"> /* WebGazer.js library */
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"webgazer.js"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span> &gt;</span><span class="undefined"></span></code></pre>
					<p>
						<i>Be aware that when you do local development and you might need to run locally a simple http server that supports the https protocol. </i>
					</p>
					<p>
						Once the script is included, the <code class="javascript">webgazer</code> object is introduced into the global namespace. <code class="javascript">webgazer</code> has methods for controlling the operation of WebGazer.js allowing us to start and stop it, add callbacks, or change out modules. The two most important methods on <code class="javascript">webgazer</code> are <code class="javascript">webgazer.begin()</code> and <code class="javascript">webgazer.setGazeListener()</code>. <code class="javascript">webgazer.begin()</code> starts the data collection that enables the predictions, so it's important to call this early on. Once <code class="javascript">webgazer.begin()</code> has been called, WebGazer.js is ready to start giving predictions. <code class="javascript">webgazer.setGazeListener()</code> is a convenient way to access these predictions. This method invokes a callback you provide every few milliseconds to provide the current gaze location of a user. If you don't need constant access to this data stream, you may alternatively call <code class="javascript">webgazer.getCurrentPrediction()</code> which will give you a prediction at the moment when it is called.
					</p>

					<pre><code class="javascript hljs">
webgazer.setGazeListener(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data, elapsedTime</span>) </span>{
	<span class="hljs-keyword">if</span> (data == <span class="hljs-literal">null</span>) {
		<span class="hljs-keyword">return</span>;
	}
	<span class="hljs-keyword">var</span> xprediction = data.x; <span class="hljs-comment">//these x coordinates are relative to the viewport</span>
	<span class="hljs-keyword">var</span> yprediction = data.y; <span class="hljs-comment">//these y coordinates are relative to the viewport</span>
	<span class="hljs-built_in">console</span>.log(elapsedTime); <span class="hljs-comment">//elapsed time is based on time since begin was called</span>
}).begin();
					</code></pre>
					<p> Here is the alternate method of getting predictions where you can request a gaze prediction as needed. </p>
					<pre><code class="javascript hljs">
<span class="hljs-keyword">var</span> prediction = webgazer.getCurrentPrediction();
<span class="hljs-keyword">if</span> (prediction) {
	<span class="hljs-keyword">var</span> x = prediction.x;
	<span class="hljs-keyword">var</span> y = prediction.y;
}
					</code></pre>
				</div>
			</div>
			<h3 class="text">Advanced Usage</h3>
			<p>There are several features that WebGazer.js enables beyond the example shown so far.</p><p>
			</p><div class="row">
				<div class="col-lg-12">
					<h4>Saving Data Between Sessions</h4>
					<p>WebGazer.js can save and restore the training data between browser sessions by storing data to the browser using <a href="https://localforage.github.io/localForage/">localforage</a>, which uses IndexedDB. This occurs automatically with every click in the window. If you want each user session to be independent make sure that you set <code class="javascript">window.saveDataAcrossSessions</code> in <code class="javascript">main.js</code> to <code class="javascript">false</code>. </p>
					<!-- <pre><code class="javascript hljs">webgazer.end()</code></pre> -->
				</div>
			</div>
			<div>
				<h4>Changing in Use Regression and Tracker Modules</h4>
				<p>At the heart of WebGazer.js are the tracker and regression modules. The tracker module controls how eyes are detected and the regression module determines how the regression model is learned and how predictions are made based on the eye patches extracted from the tracker module. These modules can be swapped in and out at any time. We hope that this will make it easy to extend and adapt WebGazer.js and welcome any developers that want to contribute.</p>

				<p>WebGazer.js requires the bounding box that includes the pixels from the webcam video feed that correspond to the detected eyes of the user. Currently we include one external library to detect the face and eyes.</p>
				<div class="row">
					<div class="col-lg-12">
						<pre><code class="javascript hljs">webgazer.setTracker(<span class="hljs-string">"TFFacemesh"</span>); <span class="hljs-comment">//set a tracker module</span></code></pre>
						<pre><code class="javascript hljs">webgazer.addTrackerModule(<span class="hljs-string">"newTracker"</span>, NewTrackerConstructor); <span class="hljs-comment">//add a new tracker module</span></code></pre>
						<p>Currently, MediaPipe <a href="https://github.com/tensorflow/tfjs-models/tree/master/facemesh">Facemesh</a> comes by default with WebGazer.js.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<pre><code class="javascript hljs">webgazer.setRegression(<span class="hljs-string">"ridge"</span>); <span class="hljs-comment">//set a regression module</span></code></pre>
						<pre><code class="javascript hljs">webgazer.addRegressionModule(<span class="hljs-string">"newReg"</span>, NewRegConstructor); <span class="hljs-comment">//add a new regression module</span></code></pre>
						<p>Here are all the regression modules that come by default with WebGazer.js. Community contributions introducing new modules are welcome on GitHub — keep in mind that they should be able to produce predictions very fast.</p>
						<ul>
							<li>ridge - a simple ridge regression model mapping pixels from the detected eyes to locations on the screen.</li>
							<li>weightedRidge - a weight ridge regression model with newest user interactions contributing more to the model.</li>
							<li>threadedRidge - a faster implementation of ridge regression that uses threads.</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<h4>Pause and Resume</h4>
					<p>It may be necessary to pause the data collection and predictions of WebGazer.js for performance reasons.</p>
					<pre><code class="javascript hljs">
webgazer.pause(); <span class="hljs-comment">//WebGazer.js is now paused, no data will be collected and the gaze callback will not be executed</span>
webgazer.resume(); <span class="hljs-comment">//data collection resumes, gaze callback will be called again</span>
					</code></pre>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<h4>Util and Params</h4>
					<p>We provide some useful functions and objects in <code class="javascript">webgazer.util</code>. The webgazer.params object also contains some useful parameters to tweak to control video fidelity (trades off speed and accuracy) and sample rate for mouse movements.</p>
					<pre><code class="javascript hljs">
webgazer.util.bound(prediction);
prediction.x; <span class="hljs-comment">//now always in the bounds of the viewport</span>
prediction.y; <span class="hljs-comment">//now always in the bounds of the viewport</span>
					</code></pre>
				</div>
			</div>
		</div>

		<hr class="featurette-divider">
		<div id="compatibility" class="container pad">
			<h2 class="text-center">Browser Compatibility</h2>
			<p class="text-left pad">
				WebGazer.js uses:
			</p>
			<ul>
				<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia">getUserMedia/Stream API</a> to get access to the webcam, which supports <a href="http://caniuse.com/#feat=stream">these browsers</a>.</li>
				<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> (used by <a href="https://localforage.github.io/localForage/">localforage</a>) for storing data to the browser, which supports <a href="https://caniuse.com/#feat=indexeddb">these browsers</a>.</li>
			</ul>

			<div class="row justify-content-center">
				<div class="col-4 col-lg-2 text-center">
					<img src="./WebGazer_files/chrome.svg" alt="Google Chrome" width="100" height="100">
					<h4 class="text-center">Google Chrome</h4>
				</div>
				<div class="col-4 col-lg-2 text-center">
					<img src="./WebGazer_files/edge.svg" alt="Microsoft Edge" width="100" height="100">
					<h4 class="text-center">Microsoft Edge</h4>
				</div>
				<div class="col-4 col-lg-2 text-center">
					<img src="./WebGazer_files/firefox.svg" alt="Mozilla Firefox" width="100" height="100">
					<h4 class="text-center">Mozilla Firefox</h4>
				</div>
				<div class="col-4 col-lg-2 text-center">
					<img src="./WebGazer_files/opera.svg" alt="Opera" width="100" height="100">
					<h4 class="text-center">Opera</h4>
				</div>
				<div class="col-4 col-lg-2 text-center">
					<img src="./WebGazer_files/safari.svg" alt="Safari" width="100" height="100">
					<h4 class="text-center">Safari</h4>
				</div>
			</div>
		</div>


		<hr class="featurette-divider">
		<div id="download" class="container pad">
			<h2 class="text-center">Download Options</h2>
			<div class="row">
				<div class="col-lg-6">
					<h4 class="pad">Download</h4>
					<form method="get" action="https://webgazer.cs.brown.edu/webgazer.js">
						<button class="btn btn-primary btn-lg" type="submit"><span class="glyphicon glyphicon-cloud-download" aria-hidden="true"></span> Download WebGazer.js</button>
					</form>
					<br>
					<h4 class="pad">Dataset</h4>
					A webcam video dataset comprising 51 participants for training and evaluating eye tracking models. Please see the <a href="https://webgazer.cs.brown.edu/data">documentation and download link</a>.
				</div>
				<div class="col-lg-6">
					<h4 class="pad">Build from source</h4>
					<p>The GitHub repository contains the <a href="https://github.com/brownhci/WebGazer">source code and version history</a>.</p>
					<pre><code class="bash hljs"><span class="hljs-comment"># Ensure NodeJS is downloaded: https://nodejs.org/en/download/</span>
git <span class="hljs-built_in">clone</span> https://github.com/brownhci/WebGazer.git
<span class="hljs-built_in">cd</span> WebGazer
<span class="hljs-comment">#install the dependencies</span>
npm install
<span class="hljs-comment">#build the project</span>
npm run build</code></pre>
				</div>
			</div>
		</div>

		<hr class="featurette-divider">
		<div id="examples" class="container pad">
			<h2 class="text-center pad">Examples</h2>
			<div class="row">
				<div class="col-lg-4">
					<img src="./WebGazer_files/empty.png" alt="Empty Webpage Demo" width="300" height="250">
					<h4 class="pad">Calibration on Empty Page</h4>
					<p>See how easy it is to integrate WebGazer.js on any webpage. With just a few clicks you will get real-time predictions. Follow the popup instructions to click through 9 calibration points on the screen whilst looking at the cursor.
					</p>
					<form method="get" action="https://webgazer.cs.brown.edu/calibration.html">
						<button id="calibration_button" class="btn btn-primary" type="submit">Try Live Demo</button>
					</form>
				</div>
				<div class="col-lg-4">
					<img src="./WebGazer_files/collision.png" alt="Collision demo" width="300" height="250">
					<h4 class="pad">Ball Collision Game</h4>
					<p class="text-justify">Move the orange ball with your eyes and create collisions with the blue balls. Train WebGazer.js by clicking in various locations within the screen, while looking at your cursor.
					</p>
					<form method="get" action="https://webgazer.cs.brown.edu/collision.html">
						<button id="collision_button" class="btn btn-primary" type="submit">Try Live Demo</button>
					</form>
				</div>
				<div class="col-lg-4">
					<img src="./WebGazer_files/google_serp.png" alt="SearchGazer" width="300" height="250">
					<h4 class="pad">WebGazer on Search Engines (legacy)</h4>
					<p class="text-justify">We have created SearchGazer.js, a library that incorporates WebGazer in Search Engines such as Bing and Google. Note that this uses an older version of WebGazer, so is here just as a legacy demo.
					</p>
					<form method="get" action="https://webgazer.cs.brown.edu/search">
						<button class="btn btn-primary" type="submit">Try SearchGazer.js</button>
					</form>
				</div>
			</div>
		</div>


		<hr class="featurette-divider">
		<div id="publication" class="container pad">
			<h2 class="text-center">Publications</h2>
			<p><i><b>Note: </b>The current iteration of WebGazer no longer corresponds with the WebGazer described in the following publications. The legacy version as described in the paper can be found in the <a href="https://github.com/brownhci/WebGazer/tree/2a4a70cb49b2d568a09362e1b52fd3bd025cd38d">commit history</a> on GitHub.</i></p>
			<div class="row">
			<div class="col-lg-1">
				<a href="https://jeffhuang.com/Final_WebGazer_IJCAI16.pdf"><img class="my-3" src="./WebGazer_files/pdf.svg" width="75" height="75" alt="pdf icon"></a>
			</div>
			<div class="col-lg-11">
			<p>If you use WebGazer.js please cite:</p>
			<p class="bib">
			<code>
				@inproceedings{papoutsaki2016webgazer,<br>
				&nbsp; author     = {Alexandra Papoutsaki and Patsorn Sangkloy and James Laskey and Nediyana Daskalova and Jeff Huang and James Hays},<br>
				&nbsp; title      = {WebGazer: Scalable Webcam Eye Tracking Using User Interactions},<br>
				&nbsp; booktitle  = {Proceedings of the 25th International Joint Conference on Artificial Intelligence (IJCAI)},<br>
				&nbsp; pages      = {3839--3845},<br>
				&nbsp; year       = {2016},<br>
				&nbsp; organization={AAAI}<br>
				}
			</code>
			</p>
			</div>
			</div>
			<div class="row">
			<div class="col-lg-1">
				<a href="https://jeffhuang.com/Final_SearchGazer_CHIIR17.pdf"><img class="my-3" src="./WebGazer_files/pdf.svg" width="75" height="75" alt="pdf icon"></a>
			</div>
			<div class="col-lg-11">
			<p>If you use <a href="https://webgazer.cs.brown.edu/search">SearchGazer.js</a> please cite the following paper:</p>
			<p class="bib">
			<code>
				@inproceedings{papoutsaki2017searchgazer,<br>
				&nbsp; author = {Alexandra Papoutsaki and James Laskey and Jeff Huang},<br>
				&nbsp; title = {SearchGazer: Webcam Eye Tracking for Remote Studies of Web Search},<br>
				&nbsp; booktitle = {Proceedings of the ACM SIGIR Conference on Human Information Interaction \&amp; Retrieval (CHIIR)},<br>
				&nbsp; year = {2017},<br>
				&nbsp; organization={ACM}<br>
				}
			</code>
			</p>
			</div>
			</div>
			<div class="row">
			<div class="col-lg-1">
				<a href="https://jeffhuang.com/Final_EyeTyper_ETRA18.pdf"><img class="my-3" src="./WebGazer_files/pdf.svg" width="75" height="75" alt="pdf icon"></a>
			</div>
			<div class="col-lg-11">
			<p>For the <a href="https://webgazer.cs.brown.edu/data">WebGazer webcam dataset</a> and findings about gaze behavior during typing:</p>
			<p class="bib">
			<code>
				@inproceedings{papoutsaki2018eye,<br>
				&nbsp; title={The eye of the typer: a benchmark and analysis of gaze behavior during typing},<br>
				&nbsp; author={Papoutsaki, Alexandra and Gokaslan, Aaron and Tompkin, James and He, Yuze and Huang, Jeff},<br>
				&nbsp; booktitle={Proceedings of the 2018 ACM Symposium on Eye Tracking Research \&amp; Applications},<br>
				&nbsp; pages={16},<br>
				&nbsp; year={2018},<br>
				&nbsp; organization={ACM}<br>
				}
			</code>
			</p>
			</div>
			</div>
		</div>

		<hr class="featurette-divider">
		<div id="press" class="container pad">
			<h2 class="text-center">Press</h2>
			<div class="row pad">
				<div class="col-lg-6">
					<p>Websites that have featured WebGazer.js:</p>
					<ul class="nobullets">
						<!--li><a href="http://www.healthaim.com/exclusive-scientist-alexandra-papoutsaki-on-revolutionary-eye-tracking-technology-webgazer-js-for-using-computers-without-lifting-a-finger/58039">HEALTHAIM</a></li-->
						<li><a href="http://www.pcworld.com/article/3078712/application-development/web-developers-meet-webgazer-software-that-turns-webcams-into-eye-trackers.html">PCWorld</a></li>
						<li><a href="https://news.brown.edu/articles/2016/06/eyetracker">News from Brown</a></li>
						<li><a href="http://news.softpedia.com/news/webgazer-uses-javascript-and-your-webcam-to-track-eye-movements-505666.shtml">Softpedia</a></li>
						<li><a href="https://techxplore.com/news/2016-06-software-webcams-eye-trackers.html">TechXplore</a></li>
						<li><a href="http://www.theregister.co.uk/2016/06/02/brown_boffins_brew_eyetracking_javascript/">The Register</a></li>
						<li><a href="http://www.i-programmer.info/news/146-uiux/9786-webgazerjs-an-in-browser-eye-tracking-library.html">I Programmer</a></li>
						<li><a href="http://zeenews.india.com/news/science/webgazer-js-turns-users-webcams-into-eye-trackers_1891045.html">Z NEWS</a></li>
						<li><a href="http://www.cio.com.au/article/601028/web-developers-meet-webgazer-software-turns-webcams-into-eye-trackers/">CIO</a>, <a href="https://web.archive.org/web/20170505044746/http://www.cio.com.au/article/601028/web-developers-meet-webgazer-software-turns-webcams-into-eye-trackers">(archive)</a></li>
					</ul>
				</div>
				<div class="col-lg-6">
				<p>Online discussions and shares in:</p>
				<ul class="nobullets">
					<li><a href="https://news.ycombinator.com/item?id=11770273">Hacker News</a>, <a href="https://news.ycombinator.com/item?id=23859985">repost</a></li>
					<li><a href="https://www.reddit.com/r/programming/comments/4kyeww/webgazerjs_eye_tracking_library_using_the_webcam/">Reddit /r/programming</a></li>
					<li><a href="https://twitter.com/search?f=tweets&amp;vertical=default&amp;q=webgazer">Twitter</a></li>
					<li><a href="https://www.youtube.com/results?search_query=webgazer">YouTube</a></li>
				</ul>
				</div>
			</div>
		</div>

		<hr class="featurette-divider">
		<div id="contact" class="container pad">
			<h2 class="text-center pad">Who We Are</h2>
			<div class="row pad">
				<!-- bootstrap has 12 columns, so each person gets part of that 12 cols -->

				<div class="col-lg-2">
					<img class="rounded-circle mx-auto d-block" src="./WebGazer_files/alexpap.jpg" alt="Alexandra Papoutsaki" height="140">
					<h4 class="text-center"><a href="http://www.cs.pomona.edu/~apapoutsaki/">Alexandra Papoutsaki</a></h4>
				</div>
				<div class="col-lg-2">
					<img class="rounded-circle mx-auto d-block" src="./WebGazer_files/aaron.jpg" alt="Aaron Gokaslan" height="140">
					<h4 class="text-center"><a href="https://skylion007.github.io/">Aaron Gokaslan</a></h4>
				</div>
				<div class="col-lg-2">
					<img class="rounded-circle mx-auto d-block" src="./WebGazer_files/ida.jpg" alt="Ida De Smet" height="140">
					<h4 class="text-center"><a href="https://www.linkedin.com/in/idakdesmet/">Ida De Smet</a></h4>
				</div>
				<div class="col-lg-2">
					<img class="rounded-circle mx-auto d-block" src="./WebGazer_files/xander.jpg" alt="Xander Koo" height="140">
					<h4 class="text-center"><a href="https://www.linkedin.com/in/xanderkoo/">Xander Koo</a></h4>
				</div>
				<div class="col-lg-2">
					<img class="rounded-circle mx-auto d-block" src="./WebGazer_files/james.jpg" alt="James Tompkin" height="140">
					<h4 class="text-center"><a href="https://jamestompkin.com/">James Tompkin</a></h4>
				</div>
				<div class="col-lg-2">
					<img class="rounded-circle mx-auto d-block" src="./WebGazer_files/jeff.jpg" alt="Jeff Huang" height="140">
					<h4 class="text-center"><a href="https://jeffhuang.com/">Jeff Huang</a></h4>
				</div>
			</div>
			<div class="row pad">
				<div class="col-lg-6">
					<h3>Other Contributors</h3>
					<ul style="margin-top: 20px" class="nobullets">
						<li><a href="https://nediyana.github.io/">Nediyana Daskalova</a></li>
						<li><a href="https://www.cc.gatech.edu/~hays/">James Hays</a></li>
						<li>Yuze He</li>
						<li>James Laskey</li>
						<li><a href="https://patsorn.me/">Patsorn Sangkloy</a></li>
						<li>Elizabeth Stevenson</li>
						<li><a href="https://cs.brown.edu/~ptunnell/">Preston Tunnell Wilson</a></li>
						<li>Jack Wong</li>
					</ul>
					<p>Want to help? See these open issues tagged <a href="https://github.com/brownhci/WebGazer/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22">"help wanted"</a></p>
				</div>
				<div class="col-lg-6">
					<h3 class="pad">Acknowledgements</h3>
					<p>Webgazer is based on the research originally done at Brown University, with recent work and maintenance jointly between Pomona College and Brown University. The current maintainer is Jeff Huang.</p>
					<p>The calibration example file was developed in the context of a course project with the aim to improve the feedback of WebGazer, proposed by Dr. Gerald Weber and his team Dr. Clemens Zeidler and Kai-Cheung Leung.</p>
					  <p>This research is supported by NSF grants IIS-1464061, IIS-1552663, a Seed Award from the Center for Vision Research at Brown University, and the Brown University Salomon Award.</p>
				</div>
			</div>
		</div>
		<hr class="featurette-divider">
		<div id="license" class="container pad">
			<h2 class="text-center">License</h2>
			<p class="text-center">Copyright (C) 2016-2026 <a href="https://webgazer.cs.brown.edu/">Brown WebGazer Team</a><br>
			Licensed under <a href="http://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a>
			</p>
		</div>

		<script src="./WebGazer_files/bootstrap.bundle.min.js.다운로드"></script>
	

</body></html>