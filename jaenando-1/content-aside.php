<aside class="podcast-aside fourcol last">
	<div class="podcast-meta">
		<p class="comarca-info-line">
			<span class="comarca">
				<?php echo 'Comarca: '; ?>
			</span>
			<?= get_field( 'comarca' ) ?>
		</p>
		<hr/>
		<div class="localidad">
			<p class="titulo-info-line">
				<span class="titulo">
					<?php echo 'Localidad: '; ?>
				</span>
				<?= get_field( 'localidad' ) ?>
			</p>
			<p class="habitantes-info-line">
				<span class="habitantes">
					<?php echo 'Habitantes: '; ?>
				</span>
				<?= get_field( 'habitantes' ) ?>
			</p>
			<p class="distancia-info-line">
				<span class="distancia">
					<?php echo 'Distancia a la capital: '; ?>
				</span>
				<?= get_field( 'distancia' ) ?>
				<?php echo 'km';?>
			</p>
			<p class="gmaps-info-line">
				<span class="gmaps">
					<?php echo 'Mapa: '; ?>
				</span>
				<?= get_field( 'gmaps' ) ?>
			</p>
		</div>
		<hr/>
		<?php if (($localidad2 = get_field( 'localidad2' )!="")) { ?>
		<div class="localidad">
			<p class="titulo-info-line">
				<span class="titulo">
					<?php echo 'Localidad: '; ?>
				</span>
				<?= get_field( 'localidad2' ) ?>
			</p>
			<p class="habitantes-info-line">
				<span class="habitantes">
					<?php echo 'Habitantes: '; ?>
				</span>
				<?= get_field( 'habitantes2' ) ?>
			</p>
			<p class="distancia-info-line">
				<span class="distancia">
					<?php echo 'Distancia a la capital: '; ?>
				</span>
				<?= get_field( 'distancia2' ) ?>
				<?php echo 'km';?>
			</p>
			<p class="gmaps-info-line">
				<span class="gmaps">
					<?php echo 'Mapa: '; ?>
				</span>
				<?= get_field( 'gmaps2' ) ?>
			</p>
		</div>
		<?php } ?>
	</div>
</aside>
