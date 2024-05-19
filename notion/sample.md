
動画見ながら要点だけメモっておくだけのもの


## ユーザ体験の指標

- Core Web Vitals
	- LCP
		- 2.5秒以内にロードを目指すことが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/75d22e30-986d-42e0-a94e-27daf4b41b8c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032755Z&X-Amz-Expires=3600&X-Amz-Signature=c35bf91927d1e0cf47b7ab1d60b8a1bf4d179d07c4f0d6d09aa6c55215854cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FCP
		- 1.8秒以内のロードが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ce4fd827-edff-4a31-8fee-2e55308fec60/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032756Z&X-Amz-Expires=3600&X-Amz-Signature=6b1b481fe5e1ae8f4eda272d3da1ab56a393f4e133614d50d8c3939af4cd382e&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FID
		- 100ms以下を目指す

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3e4c566b-0b34-4a39-8720-9012d128dbdd/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032759Z&X-Amz-Expires=3600&X-Amz-Signature=b150e113bef498a128331d47421b9b339d22c5b618481bf1aacc957bf22a250a&X-Amz-SignedHeaders=host&x-id=GetObject)

- 開発者体験の指標

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f0ad49d8-b343-4166-abd6-6ac7067b9887/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032759Z&X-Amz-Expires=3600&X-Amz-Signature=3d3fa8b21e7100d343f06c751787308d1fec58f830eabab166c9a293ba590972&X-Amz-SignedHeaders=host&x-id=GetObject)

- ユーザー体験と開発者体験から見るフロントエンドのレンダリングパターン

## レンダリングパターン


### CSR（Client Side Rendering）


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/2ad57243-c41a-4c90-8eb0-ce5c2866bab1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032755Z&X-Amz-Expires=3600&X-Amz-Signature=c45c32ac3489400e959ad0858b763938becbfcdd425cf73921160d22b55c5898&X-Amz-SignedHeaders=host&x-id=GetObject)

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

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/80afdaa5-2a09-4fb7-9b5e-9d6040b494fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032802Z&X-Amz-Expires=3600&X-Amz-Signature=31e5e662130703fccfcca650fb34687045debf1dc2b811418820b7013dad5176&X-Amz-SignedHeaders=host&x-id=GetObject)

	- キャッシュ
		- ユーザのブラウザ = Private Cache
		- CDN = Public Cache
		- オリジンのキャッシュコントロールによってコントロールできる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cae49381-5ec9-4579-99d5-a5e2699409cb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032802Z&X-Amz-Expires=3600&X-Amz-Signature=511404fedb31bd89a0ddfe9eeb3bbeb8a900e0918e2ec9ffdfc50f063a14fbb6&X-Amz-SignedHeaders=host&x-id=GetObject)

		- webpackにより、ハッシュ値を名前に設定することでキャッシュをクリアする方法が一般的
		- 合わせてデプロイ際には、CDNのキャッシュもクリアする

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cfe36d40-65f9-40b0-bd91-c714e476db99/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032802Z&X-Amz-Expires=3600&X-Amz-Signature=bc32009462f337397ec9c19fa47fa3604a7a90e83fda2868782c921f905f67e6&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Client Side Routingの制御

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0636a317-4925-4e64-ba39-0e077a8c96eb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032803Z&X-Amz-Expires=3600&X-Amz-Signature=de26491e8fec457b8f29e3d987d09ca761dc41fee713e93f6289b0b32ce482c3&X-Amz-SignedHeaders=host&x-id=GetObject)

	- CloudFront Functionによる制御
		- CloudFrontでは、2つのレイヤーが存在しており、よりユーザに近いEdge Locationで制御することが推奨される

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/66988652-990b-4bd8-b553-aaecb9dcfd4c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032803Z&X-Amz-Expires=3600&X-Amz-Signature=e35c071355a47a2acd27876ffd8a7dde5e84f3a74743a39717877027247489af&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSR （Server Side Rendering）

- Hydration
	- 単なる文字列としてサーバー側から返却されるHTMLにイベントなどをアタッチし、HTMLを完成させる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/fe009ceb-3a80-4310-a190-9313ad0821b1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032804Z&X-Amz-Expires=3600&X-Amz-Signature=685ae8ce977d2fe982c504664f432c9b5abfdacb4ae09253cc08473b5613c9f4&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/88790561-ccdc-47b1-beac-886c1c0d78d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032804Z&X-Amz-Expires=3600&X-Amz-Signature=6495d21303e0f42ff49c0cb7e1376c3ed5f05ad4499d237402ead2d92408bbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

- AWS アーキテクチャ
	- SSRするサーバーとデータソース
		- サーバー側でHTMLを構築する際にAPIを介したり、直接DBにリクエストする

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0a351321-aa65-4bbf-8965-f21dbdb1017f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032806Z&X-Amz-Expires=3600&X-Amz-Signature=d719648da39c5d0e797f7a9952740dcd6a96ca15fb1b4fce68b4e2829638de67&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda Edgeを利用するパターン

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4f597d78-25d8-478f-8765-82638aa3d924/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032806Z&X-Amz-Expires=3600&X-Amz-Signature=6631882ba455a12728be5b72f4c2837f3db1fb1e6a6e91b7e0dc0a2c38ac692c&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRのレンダリングプロセス
	- FCPは短縮できる（画面の最初の描画は早い）
	- TTIは、CSRとほぼ変わらない（ユーザが利用できるようになるまでの時間は変わらない）
	- 画面は表示されているのに、ユーザが操作できないといった体験が生まれる可能性があることに注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/23b2817f-51c1-484e-a1c4-3e6850499ca7/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032808Z&X-Amz-Expires=3600&X-Amz-Signature=4d3a84fcb4f3f1d7639e5913cd110b856bae197d668881376197f96ce0c2b3d5&X-Amz-SignedHeaders=host&x-id=GetObject)


	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/b27b2cdc-bc60-44dc-8c83-216aae6a83c9/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032808Z&X-Amz-Expires=3600&X-Amz-Signature=5753740178d78763c2ded33f3a779bc6d0d448f9a77b19de1ad7018dfca71608&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRの課題

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f508d3b1-1428-406a-a352-9c6352c5beea/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032808Z&X-Amz-Expires=3600&X-Amz-Signature=c1425d83ad80716dc5c77ac44c7f9c29f18aec69f5d4936067c9c30e5722901e&X-Amz-SignedHeaders=host&x-id=GetObject)

	- これらを解決するStreaming HTMLやSelective Hydration
	- Streaming HTML
		- データフェッチが終わったところから、HTMLを部分的に返却していく
			- FCPやTTIを早めることができる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4b020a76-dbaa-4e2b-b20d-3363caa4f814/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032808Z&X-Amz-Expires=3600&X-Amz-Signature=24e499b65fc2db2d0ab20b33d309c9345a603a44853f1068da22225c19b350de&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Selective Hydration
		- ReactのSuspenseなど

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a4e946ea-1292-4138-8933-a4fd97bd59bf/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032809Z&X-Amz-Expires=3600&X-Amz-Signature=9eca5dfe12a60363fad107b12dac8532e7d1dda2b0f7b0244095fd30ecb7a8a0&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSG（Static Site Genetation）

- prerenderring
- SSRは、ユーザからのリクエストに応じてHTMLを生成する
- SSGは、事前にすべてのページを生成する
	- サーバーサイドでのレンダリングやフェッチが不要になり、ユーザに早く届けることができる
- AWS アーキテクチャ
	- ビルドしたHTMLをS3へ配置

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/95df6ff5-9980-4a68-b7a5-48977a9aa5f3/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032811Z&X-Amz-Expires=3600&X-Amz-Signature=baba1bc131b53ae92593c2bf589ab4dbe01a094fed2ae12d722149dd7cd800ec&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSGの得意領域
	- 表示速度に特化

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9df8272a-e1b4-4ed4-8e95-5664e132cdc8/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032811Z&X-Amz-Expires=3600&X-Amz-Signature=540b973c71ae61cc4ae92aa231cadedcbb6cb58c3e297ceb10ed255f76c99641&X-Amz-SignedHeaders=host&x-id=GetObject)

	- 注意点

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/41438ace-e9bb-4591-bac1-0e33d3444116/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032811Z&X-Amz-Expires=3600&X-Amz-Signature=d0e2e957675278c5eb93233b6636d23d40a5b6ef34d3388768c5476823241cb2&X-Amz-SignedHeaders=host&x-id=GetObject)


### ISR（Incremental Static Regeneration）

- ページに優先度をつけて、必要な分だけ生成することでSSGのビルドにかかる時間という課題を解決する

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0ccb84f1-ffb3-4842-9da3-3795d5e52662/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032812Z&X-Amz-Expires=3600&X-Amz-Signature=43149947dd03869b5a9aa2a2fc6ad0e2428007f06c9c3d10adfe716c37229768&X-Amz-SignedHeaders=host&x-id=GetObject)

- Cache
	- 60秒ごとのrevalidate
	- オンデマンド revaidationも選択肢にある

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9813b124-73b0-4e5d-ab7c-e6623c86113d/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032813Z&X-Amz-Expires=3600&X-Amz-Signature=b19d310abe87f7dcee9f5af6738e9e82ff97aa5a76a7a92c1df0bc04c56064eb&X-Amz-SignedHeaders=host&x-id=GetObject)


## Next.jsのホスティングパターン


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0703b173-ca6d-4d47-910c-a6c3e10955d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032755Z&X-Amz-Expires=3600&X-Amz-Signature=e88c67e994163c8a2e4baa369ea030aab28a01a9e6fa92f8b8e06cfe0506e57f&X-Amz-SignedHeaders=host&x-id=GetObject)

- Serverless
	- Next12までの一部の機能をサポートしていることやLambda@Edgeを利用している点への注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/53616558-6fde-458d-81a5-be31feb648a1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032813Z&X-Amz-Expires=3600&X-Amz-Signature=338213b1ed139db6eb616f2dc4a6b0cba4b00006e95d3fc071aa7361104727c8&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Serverless Next.jsの開発は停止している

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a7bb99ef-973a-4e9d-9b69-259b6beb1e93/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032813Z&X-Amz-Expires=3600&X-Amz-Signature=bad1f952e29886e6b823a855a669b8445d5e0ca6a73eeb9ea1750e583649dd1b&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Open Nextという方法

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/70c12591-f21b-4713-ae9c-50b4ae39225a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032813Z&X-Amz-Expires=3600&X-Amz-Signature=b1ebaa4600ad835c6336a0896f2af6af3a62c7c88dd9ef23357e1f6e3bd16748&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda アダプター

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/1f53d93c-eeee-4183-85be-10373643a899/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032814Z&X-Amz-Expires=3600&X-Amz-Signature=8c97122ce468ab60c979cec1cb19c10ef75ca121c725578a3bd38158e772c329&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d23fce06-e5d6-47cf-9e43-5d7e87bb8516/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032814Z&X-Amz-Expires=3600&X-Amz-Signature=efd7b72ea309a43c7c6e2ad87a21c2eade67269b0a493236589a7ced3ceb9a38&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ec42f0e2-e0ca-4956-a993-3af9efce370b/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032814Z&X-Amz-Expires=3600&X-Amz-Signature=878487b07ad4faf83d68dc2b1a7e3f4f62db6dc829b542ced7f5503be4d800da&X-Amz-SignedHeaders=host&x-id=GetObject)

- Amplify Hosting
	- シンプルに利用できるが、すべての機能をサポートしていない

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3d112b7c-5549-4a2b-af49-82831e84a66a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032815Z&X-Amz-Expires=3600&X-Amz-Signature=71b5a3b7aea32ff74c8015ca9bb5d18611939094c54a9dd2f4adef37a5c5a560&X-Amz-SignedHeaders=host&x-id=GetObject)

- Computing
	- 開発コストは上がるが、すべての機能を利用できる

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f48d6e33-61cf-4591-b8a5-70fca82fa829/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032815Z&X-Amz-Expires=3600&X-Amz-Signature=3b9d62dfb6e826f246473bfd4f2555e7922241a13882548d5646a5edfc4d7ee2&X-Amz-SignedHeaders=host&x-id=GetObject)


まとめ


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d21cb858-e015-4bf5-aeab-50c45370da09/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T032755Z&X-Amz-Expires=3600&X-Amz-Signature=8b2591c3590e70d445ad7d02f5a06a7981d0752cba056ac94c51fb9a74b522dc&X-Amz-SignedHeaders=host&x-id=GetObject)


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
