
動画見ながら要点だけメモっておくだけのもの


## ユーザ体験の指標

- Core Web Vitals
	- LCP
		- 2.5秒以内にロードを目指すことが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/75d22e30-986d-42e0-a94e-27daf4b41b8c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134750Z&X-Amz-Expires=3600&X-Amz-Signature=c1bc86886fe87d4cd8bc2310f3c104f151825a43a3077d547ca181de3dc302e4&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FCP
		- 1.8秒以内のロードが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ce4fd827-edff-4a31-8fee-2e55308fec60/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134750Z&X-Amz-Expires=3600&X-Amz-Signature=c02ca642f3aa802578750aa8b629725cb8b7ec2be4cd9fe94429dc0abf37c3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FID
		- 100ms以下を目指す

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3e4c566b-0b34-4a39-8720-9012d128dbdd/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134750Z&X-Amz-Expires=3600&X-Amz-Signature=2980ec7a28513adc0ef532f6e413232acc03bf493f07647a44fdecea59c05801&X-Amz-SignedHeaders=host&x-id=GetObject)

- 開発者体験の指標

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f0ad49d8-b343-4166-abd6-6ac7067b9887/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134751Z&X-Amz-Expires=3600&X-Amz-Signature=d10e2ae090bff84ce79323eb7618c468f244d0e5c7098997e78389f2c2f029a3&X-Amz-SignedHeaders=host&x-id=GetObject)

- ユーザー体験と開発者体験から見るフロントエンドのレンダリングパターン

## レンダリングパターン


### CSR（Client Side Rendering）


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/2ad57243-c41a-4c90-8eb0-ce5c2866bab1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134749Z&X-Amz-Expires=3600&X-Amz-Signature=ce2789e5b36e2f33afd5ad881664a9ecbe6605ac62caa04d7b9a79eb57c884ca&X-Amz-SignedHeaders=host&x-id=GetObject)

- `<div id=”root”></div>` のみのHTMLが最初にダウンロードされる
	- JSでページを構成する
	- デメリット
		- 最初にJSでページを構成するまで、ユーザに何もないページを提供することになる
			- サーバーコスト：低
			- クライアントコスト：高
	- JSのサイズが多くなり、ユーザのデバイスが最新ではない傾向から、パフォーマンスの最適化が求められる
		- Code SplittingやLazy Loadによるユーザ体験の向上
			- 必要最低限のJSのみ最初に読み込んでおき、優先度の低いものは遅延読み込みをさせることで、ユーザに必要最低限の機能を最初に提供しておく
				- 完成度(80%) → ユーザーが基本的に利用に支障がない → ユーザに使用してもらいつつ、裏で100%になるようにJSのDLをコントロールする
- AWSアーキテクチャの例
	- CloudFront + S3

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/80afdaa5-2a09-4fb7-9b5e-9d6040b494fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134754Z&X-Amz-Expires=3600&X-Amz-Signature=da029437a68a034ecafcff7db52ec8cc447f8238475a33e5133360e450bdfb18&X-Amz-SignedHeaders=host&x-id=GetObject)

	- キャッシュ
		- ユーザのブラウザ = Private Cache
		- CDN = Public Cache
		- オリジンのキャッシュコントロールによってコントロールできる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cae49381-5ec9-4579-99d5-a5e2699409cb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134754Z&X-Amz-Expires=3600&X-Amz-Signature=c0ba1ed17ef65df793942ad04f6104af0919b12276ac3268cb1328abb930401e&X-Amz-SignedHeaders=host&x-id=GetObject)

		- webpackにより、ハッシュ値を名前に設定することでキャッシュをクリアする方法が一般的
		- 合わせてデプロイ際には、CDNのキャッシュもクリアする

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cfe36d40-65f9-40b0-bd91-c714e476db99/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134754Z&X-Amz-Expires=3600&X-Amz-Signature=b6656b9047c77267fb43777bd86b59050d9a986b5b6fa91779e7cbfb48892f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Client Side Routingの制御

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0636a317-4925-4e64-ba39-0e077a8c96eb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134755Z&X-Amz-Expires=3600&X-Amz-Signature=705742d84acf4db215edd1ccfe9323938d274ea1e3ab4eeef44f13b2fb5a3b89&X-Amz-SignedHeaders=host&x-id=GetObject)

	- CloudFront Functionによる制御
		- CloudFrontでは、2つのレイヤーが存在しており、よりユーザに近いEdge Locationで制御することが推奨される

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/66988652-990b-4bd8-b553-aaecb9dcfd4c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134755Z&X-Amz-Expires=3600&X-Amz-Signature=5b8b1467df3ea65cd7f7ad51e8bca048a5d39f8a11dbe57d17d9d39f84bf3ee2&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSR （Server Side Rendering）

- Hydration
	- 単なる文字列としてサーバー側から返却されるHTMLにイベントなどをアタッチし、HTMLを完成させる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/fe009ceb-3a80-4310-a190-9313ad0821b1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134755Z&X-Amz-Expires=3600&X-Amz-Signature=e9b63f16ba86774f9c851822d4b8762d5550d55f3758da85943a893ea23080fd&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/88790561-ccdc-47b1-beac-886c1c0d78d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134755Z&X-Amz-Expires=3600&X-Amz-Signature=4696c0b6ee83d96c6c38d7f10ad4ceab43c67d1f3c1f9fe80ce770245d464ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

- AWS アーキテクチャ
	- SSRするサーバーとデータソース
		- サーバー側でHTMLを構築する際にAPIを介したり、直接DBにリクエストする

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0a351321-aa65-4bbf-8965-f21dbdb1017f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134755Z&X-Amz-Expires=3600&X-Amz-Signature=00899f538cf5de5958314481f5cc88c2e114ff8aaa9fcdc566354e92a2fff2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda Edgeを利用するパターン

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4f597d78-25d8-478f-8765-82638aa3d924/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134755Z&X-Amz-Expires=3600&X-Amz-Signature=542aeeeb21bd2bed1651c68fedcd014d6aa5f685e57f84eb02d4988bfdf1410d&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRのレンダリングプロセス
	- FCPは短縮できる（画面の最初の描画は早い）
	- TTIは、CSRとほぼ変わらない（ユーザが利用できるようになるまでの時間は変わらない）
	- 画面は表示されているのに、ユーザが操作できないといった体験が生まれる可能性があることに注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/23b2817f-51c1-484e-a1c4-3e6850499ca7/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134756Z&X-Amz-Expires=3600&X-Amz-Signature=4bf8abcf75ad4af52b4522c23765895d45b968285d661740cbb55115d20f1d9c&X-Amz-SignedHeaders=host&x-id=GetObject)


	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/b27b2cdc-bc60-44dc-8c83-216aae6a83c9/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134756Z&X-Amz-Expires=3600&X-Amz-Signature=359953920f799106ecf3dd1ebf211f6086b41b80722f66e90d30dad32cf69808&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRの課題

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f508d3b1-1428-406a-a352-9c6352c5beea/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134756Z&X-Amz-Expires=3600&X-Amz-Signature=50ed088d548e6dbb76a5fcf546a920570ab5936a0aaca46171bfe0664a4ab3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

	- これらを解決するStreaming HTMLやSelective Hydration
	- Streaming HTML
		- データフェッチが終わったところから、HTMLを部分的に返却していく
			- FCPやTTIを早めることができる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4b020a76-dbaa-4e2b-b20d-3363caa4f814/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134756Z&X-Amz-Expires=3600&X-Amz-Signature=18265ffd56332ff54f0c801cb1bce21f14fe7d17e2cc48e33d9be46a06eb54d9&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Selective Hydration
		- ReactのSuspenseなど

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a4e946ea-1292-4138-8933-a4fd97bd59bf/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134759Z&X-Amz-Expires=3600&X-Amz-Signature=fe7aef83ca5f020e3665e28f98877489bb2f3b1394886dbffe62ce5f0d7b67ad&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSG（Static Site Genetation）

- prerenderring
- SSRは、ユーザからのリクエストに応じてHTMLを生成する
- SSGは、事前にすべてのページを生成する
	- サーバーサイドでのレンダリングやフェッチが不要になり、ユーザに早く届けることができる
- AWS アーキテクチャ
	- ビルドしたHTMLをS3へ配置

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/95df6ff5-9980-4a68-b7a5-48977a9aa5f3/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134759Z&X-Amz-Expires=3600&X-Amz-Signature=1bc55ebf51947e3619bb254bfc63dcbd1126566afb5dada640c8bfefeb0aae41&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSGの得意領域
	- 表示速度に特化

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9df8272a-e1b4-4ed4-8e95-5664e132cdc8/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134759Z&X-Amz-Expires=3600&X-Amz-Signature=6678da43171b8e5f315c718287c1a16e944d252a32fb3b6893ef7d6fec4cac74&X-Amz-SignedHeaders=host&x-id=GetObject)

	- 注意点

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/41438ace-e9bb-4591-bac1-0e33d3444116/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134759Z&X-Amz-Expires=3600&X-Amz-Signature=a353125d9834c30980921d8637ee8af6f017734d52c24ff6769a6f135668470c&X-Amz-SignedHeaders=host&x-id=GetObject)


### ISR（Incremental Static Regeneration）

- ページに優先度をつけて、必要な分だけ生成することでSSGのビルドにかかる時間という課題を解決する

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0ccb84f1-ffb3-4842-9da3-3795d5e52662/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134759Z&X-Amz-Expires=3600&X-Amz-Signature=161ce834620941b0e0ae6e124631a5dd21b3d8f734727d4312a34f3a1810ebd4&X-Amz-SignedHeaders=host&x-id=GetObject)

- Cache
	- 60秒ごとのrevalidate
	- オンデマンド revaidationも選択肢にある

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9813b124-73b0-4e5d-ab7c-e6623c86113d/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134800Z&X-Amz-Expires=3600&X-Amz-Signature=39d76b1e012eebd5bc4f9c8fe693e6503efc058e2620379951f0825b01f25753&X-Amz-SignedHeaders=host&x-id=GetObject)


## Next.jsのホスティングパターン


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0703b173-ca6d-4d47-910c-a6c3e10955d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134749Z&X-Amz-Expires=3600&X-Amz-Signature=c30ee034e749d5e34f86e1ded5d1e65792f1dfb04ef8c8eeea5edb3e78ff5da4&X-Amz-SignedHeaders=host&x-id=GetObject)

- Serverless
	- Next12までの一部の機能をサポートしていることやLambda@Edgeを利用している点への注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/53616558-6fde-458d-81a5-be31feb648a1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134800Z&X-Amz-Expires=3600&X-Amz-Signature=9cde781dd0af8a844e64b934300ad14dd7862eb28758cadb3445b8234915cdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Serverless Next.jsの開発は停止している

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a7bb99ef-973a-4e9d-9b69-259b6beb1e93/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134800Z&X-Amz-Expires=3600&X-Amz-Signature=66c727c8133dd490f489a42926d68ecac8588fc99ea3e5adc4c50b7d10329291&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Open Nextという方法

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/70c12591-f21b-4713-ae9c-50b4ae39225a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134800Z&X-Amz-Expires=3600&X-Amz-Signature=866514061cd6c941ac2661f1a5fac5c54bdc5e112ca26da0f604138394e5c611&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda アダプター

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/1f53d93c-eeee-4183-85be-10373643a899/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134801Z&X-Amz-Expires=3600&X-Amz-Signature=5a0c145c751ce10ec0bde94671a7edf6a9a0ecfcb20a6cd015c2cd8f60b96d15&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d23fce06-e5d6-47cf-9e43-5d7e87bb8516/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134801Z&X-Amz-Expires=3600&X-Amz-Signature=b4131b91016d0202f5c58f6597841f7732b59dd3f7344e711762d33bfe1462f2&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ec42f0e2-e0ca-4956-a993-3af9efce370b/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134801Z&X-Amz-Expires=3600&X-Amz-Signature=321d171764134495f6f2878e30256b2d3d1741d7be53778c23162c80dd99bd30&X-Amz-SignedHeaders=host&x-id=GetObject)

- Amplify Hosting
	- シンプルに利用できるが、すべての機能をサポートしていない

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3d112b7c-5549-4a2b-af49-82831e84a66a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134801Z&X-Amz-Expires=3600&X-Amz-Signature=90b2c1f0271774cdba89549bf78a4f12d946f6f229929fb79eac16e1b37f86a5&X-Amz-SignedHeaders=host&x-id=GetObject)

- Computing
	- 開発コストは上がるが、すべての機能を利用できる

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f48d6e33-61cf-4591-b8a5-70fca82fa829/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134801Z&X-Amz-Expires=3600&X-Amz-Signature=944c8956e0e93606b735b922d274e6419a70ebc0d67c351d097dd47d093b39bd&X-Amz-SignedHeaders=host&x-id=GetObject)


まとめ


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d21cb858-e015-4bf5-aeab-50c45370da09/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240520T134749Z&X-Amz-Expires=3600&X-Amz-Signature=e8245a3c4a7f5f20994f519af2151bcb128ffb285e72e09c940db145f8765fab&X-Amz-SignedHeaders=host&x-id=GetObject)


おまけ


[video](https://www.youtube.com/watch?v=R2YQG5gQMXo)


メモ

- SSR
	- SSRはお客様でトラブルが発生した際に問題の切り分けがしやすい
		- CSRはお客様の環境でwebページを構築してしまうので、お客様環境固有の問題なのか、サービス側が送信したものに不具合があったか分かりにくい
		- SSRの場合は、提供しているものをサーバー側で作っているのでバックアップをとって実際にお客様に渡しているものを把握できる
	- JSが動かない環境でも目的を果たせる（かもしれない）
		- CSRはJSが動かないとほとんど何もできない
		- SSRはサーバー側でHTMLを構築するのでJSが機能しないお客様のフォローもできる
