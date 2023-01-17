import styles from "./Post.module.css";

export function Post(props) {

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://avatars.githubusercontent.com/u/32603174?v=4" />
					<div className={styles.authorInfo}>
						<strong>Eliezer Mafra</strong>
						<span>Web developer</span>
					</div>
				</div>

				<time title="17 de janeiro de 2023 às 13:56h" dateTime="2023-01-17 13:56:30"> Publicado à 1h</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p>👉 <a href=""> jane.design/doctorcare</a></p>
				<p><a href="">#novoprojeto #nlw #rocketseat</a></p>

			</div>
		</article>
	)
} 