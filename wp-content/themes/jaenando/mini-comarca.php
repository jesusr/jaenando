<?php
/**
* Template Name: mini-comarca
* @package Jaenando
* @since Jaenando 0.1
**/
require('../../../wp-load.php');
$comarcas=array("sierrasur" => "Sierra Sur","condado"=>"El Condado","sierramorena"=>"Sierra Morena","campina"=>"La Campiña","lasvillas"=>"Las Villas","laloma"=>"La Loma","cazorla"=>"Cazorla","jaen"=>"Jaén","sierramagina"=>"Sierra Mágina","sierrasegura"=>"Sierra de Segura");
?>
			<div id="comarca">
				<div id="" class="detalle-<?php echo $_GET["cname"];?>">
					<?php echo '<h2>Comarca de <span>'.$comarcas[$_GET["cname"]].'</span></h2>';?>
			 		<?php 
			 			$aux = $_GET["cname"];
						query_posts(array('post_type' => 'podcast','category_name'=>$aux)); 
					?>
					<?php if( !have_posts() ) : ?>
						<article>
							<header class="entry-header">
								<h3 class="entry-title-prop">¡Aún no! ¡Próximamente! </h3>
							</header>
						</article>
					<?php endif;?>
					<?php while ( have_posts() ) : the_post(); ?>
						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<header class="entry-header">
								<h3 class="entry-title-prop"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h3>
								<div class="entry-meta">
 									<?php echo get_the_post_thumbnail( $post_id, 'medium', $attr ); ?>
								</div><!-- .entry-meta -->
								<p class="btns">
									<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">Ver más</a>
									<link href="wp-content/themes/jaenando/js/blue.monday/css/jplayer.blue.monday.min.css" rel="stylesheet" type="text/css" />
									<script type="text/javascript" src="wp-content/themes/jaenando/js/jquery.jplayer.min.js"></script>
									<script type="text/javascript">
									//<![CDATA[

									// TMP For testing on standard browsers.
									// $.jPlayer.platform.android = true;

									var jPlayerAndroidFix = (function($) {
										var fix = function(id, media, options) {
											this.playFix = false;
											this.init(id, media, options);
										};
										fix.prototype = {
											init: function(id, media, options) {
												var self = this;

												// Store the params
												this.id = id;
												this.media = media;
												this.options = options;

												// Make a jQuery selector of the id, for use by the jPlayer instance.
												this.player = $(this.id);

												// Make the ready event to set the media to initiate.
												this.player.bind($.jPlayer.event.ready, function(event) {
													// Use this fix's setMedia() method.
													self.setMedia(self.media);
												});

												// Apply Android fixes
												if($.jPlayer.platform.android) {

													// Fix playing new media immediately after setMedia.
													this.player.bind($.jPlayer.event.progress, function(event) {
														if(self.playFixRequired) {
															self.playFixRequired = false;

															// Enable the contols again
															// self.player.jPlayer('option', 'cssSelectorAncestor', self.cssSelectorAncestor);

															// Play if required, otherwise it will wait for the normal GUI input.
															if(self.playFix) {
																self.playFix = false;
																$(this).jPlayer("play");
															}
														}
													});
													// Fix missing ended events.
													this.player.bind($.jPlayer.event.ended, function(event) {
														if(self.endedFix) {
															self.endedFix = false;
															setTimeout(function() {
																self.setMedia(self.media);
															},0);
															// what if it was looping?
														}
													});
													this.player.bind($.jPlayer.event.pause, function(event) {
														if(self.endedFix) {
															var remaining = event.jPlayer.status.duration - event.jPlayer.status.currentTime;
															if(event.jPlayer.status.currentTime === 0 || remaining < 1) {
																// Trigger the ended event from inside jplayer instance.
																setTimeout(function() {
																	self.jPlayer._trigger($.jPlayer.event.ended);
																},0);
															}
														}
													});
												}

												// Instance jPlayer
												this.player.jPlayer(this.options);

												// Store a local copy of the jPlayer instance's object
												this.jPlayer = this.player.data('jPlayer');

												// Store the real cssSelectorAncestor being used.
												this.cssSelectorAncestor = this.player.jPlayer('option', 'cssSelectorAncestor');

												// Apply Android fixes
												this.resetAndroid();

												return this;
											},
											setMedia: function(media) {
												this.media = media;

												// Apply Android fixes
												this.resetAndroid();

												// Set the media
												this.player.jPlayer("setMedia", this.media);
												return this;
											},
											play: function() {
												// Apply Android fixes
												if($.jPlayer.platform.android && this.playFixRequired) {
													// Apply Android play fix, if it is required.
													this.playFix = true;
												} else {
													// Other browsers play it, as does Android if the fix is no longer required.
													this.player.jPlayer("play");
												}
											},
											resetAndroid: function() {
												// Apply Android fixes
												if($.jPlayer.platform.android) {
													this.playFix = false;
													this.playFixRequired = true;
													this.endedFix = true;
													// Disable the controls
													// this.player.jPlayer('option', 'cssSelectorAncestor', '#NeverFoundDisabled');
												}
											}
										};
										return fix;
									})(jQuery);

									$(document).ready(function() {

										var id = "#jquery_jplayer_1";

										var bubble = {
											title:"Bubble",
											mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
											oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
										};
										var lismore = {
											title:"Lismore",
											mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
											oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
										};

										var options = {
											swfPath: "../../dist/jplayer",
											supplied: "mp3,oga",
											wmode: "window",
											useStateClassSkin: true,
											autoBlur: false,
											smoothPlayBar: true,
											keyEnabled: true,
											remainingDuration: true,
											toggleDuration: true
										};

										var myAndroidFix = new jPlayerAndroidFix(id, bubble, options);

										$('#setMedia-Bubble').click(function() {
											myAndroidFix.setMedia(bubble);
										});
										$('#setMedia-Bubble-play').click(function() {
											myAndroidFix.setMedia(bubble).play();
										});

										$('#setMedia-Lismore').click(function() {
											myAndroidFix.setMedia(lismore);
										});
										$('#setMedia-Lismore-play').click(function() {
											myAndroidFix.setMedia(lismore).play();
										});

									});
									//]]>
									</script>
									<div id="jquery_jplayer_1" class="jp-jplayer"></div>
									<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">
										<div class="jp-type-single">
											<div class="jp-gui jp-interface">
												<div class="jp-controls">
													<button class="jp-play" role="button" tabindex="0">play</button>
													<button class="jp-stop" role="button" tabindex="0">stop</button>
												</div>
												<div class="jp-progress">
													<div class="jp-seek-bar">
														<div class="jp-play-bar"></div>
													</div>
												</div>
												<div class="jp-volume-controls">
													<button class="jp-mute" role="button" tabindex="0">mute</button>
													<button class="jp-volume-max" role="button" tabindex="0">max volume</button>
													<div class="jp-volume-bar">
														<div class="jp-volume-bar-value"></div>
													</div>
												</div>
												<div class="jp-time-holder">
													<div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
													<div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
													<div class="jp-toggles">
														<button class="jp-repeat" role="button" tabindex="0">repeat</button>
													</div>
												</div>
											</div>
											<div class="jp-details">
												<div class="jp-title" aria-label="title">&nbsp;</div>
											</div>
											<div class="jp-no-solution">
												<span>Update Required</span>
												To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
											</div>
										</div>
									</div>

								</p>
							</header><!-- .entry-header -->
							<div class="texto-completo">
								<?php the_excerpt( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?>
								<p class="leermas"><a href="<?php the_permalink();?>">Más</a></p>
							</div><!-- .entry-summary -->
						</article><!-- #post-<?php the_ID(); ?> -->

					<?php endwhile; ?>
				</div>
			</div>