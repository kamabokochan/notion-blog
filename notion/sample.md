
動画見ながら要点だけメモっておくだけのもの


## ユーザ体験の指標

- Core Web Vitals
	- LCP
		- 2.5秒以内にロードを目指すことが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/75d22e30-986d-42e0-a94e-27daf4b41b8c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100403Z&X-Amz-Expires=3600&X-Amz-Signature=a9ec74ea9e4324a9937b58c38408e24dbeee6b86d62f48ed7d5c71682c78d617&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FCP
		- 1.8秒以内のロードが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ce4fd827-edff-4a31-8fee-2e55308fec60/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100405Z&X-Amz-Expires=3600&X-Amz-Signature=b4daa5edb98de608a93d5001cfddd5b967e8b519cfc2fbbb1c0c2075f0dfd760&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FID
		- 100ms以下を目指す

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3e4c566b-0b34-4a39-8720-9012d128dbdd/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100406Z&X-Amz-Expires=3600&X-Amz-Signature=3d4bb8f7150f0c3944492c9ece37b365abd367081c654cd7a0736c12545a4587&X-Amz-SignedHeaders=host&x-id=GetObject)

- 開発者体験の指標

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f0ad49d8-b343-4166-abd6-6ac7067b9887/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100410Z&X-Amz-Expires=3600&X-Amz-Signature=e57378734026b4a91b2f1df6cd450356d79694999f32739edd7bb7742dcb1c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

- ユーザー体験と開発者体験から見るフロントエンドのレンダリングパターン

## レンダリングパターン


### CSR（Client Side Rendering）


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/2ad57243-c41a-4c90-8eb0-ce5c2866bab1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100402Z&X-Amz-Expires=3600&X-Amz-Signature=3149bafa93d127e9ecef5715c8918063abdcbfb46d5e0ecc3b8ad4427b79e76b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/80afdaa5-2a09-4fb7-9b5e-9d6040b494fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100411Z&X-Amz-Expires=3600&X-Amz-Signature=8f7f472c0a885c667a3105ee36d55be5d4e1b7e8ed212b1cb2d88a2b212cf8df&X-Amz-SignedHeaders=host&x-id=GetObject)

	- キャッシュ
		- ユーザのブラウザ = Private Cache
		- CDN = Public Cache
		- オリジンのキャッシュコントロールによってコントロールできる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cae49381-5ec9-4579-99d5-a5e2699409cb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100412Z&X-Amz-Expires=3600&X-Amz-Signature=25ee37bef3863d4172c7f31c2559754040aafcb815e81723b250ebe1488f29db&X-Amz-SignedHeaders=host&x-id=GetObject)

		- webpackにより、ハッシュ値を名前に設定することでキャッシュをクリアする方法が一般的
		- 合わせてデプロイ際には、CDNのキャッシュもクリアする

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cfe36d40-65f9-40b0-bd91-c714e476db99/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100412Z&X-Amz-Expires=3600&X-Amz-Signature=38b9eee837c88d1ed9152b47c1f57dc9d7335c445500f2915df0865620cb613b&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Client Side Routingの制御

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0636a317-4925-4e64-ba39-0e077a8c96eb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100412Z&X-Amz-Expires=3600&X-Amz-Signature=67e252bf0c22377690babc52051d60c52107773b9b634a017ad37e2d4581112f&X-Amz-SignedHeaders=host&x-id=GetObject)

	- CloudFront Functionによる制御
		- CloudFrontでは、2つのレイヤーが存在しており、よりユーザに近いEdge Locationで制御することが推奨される

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/66988652-990b-4bd8-b553-aaecb9dcfd4c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100412Z&X-Amz-Expires=3600&X-Amz-Signature=9088f6e0fda38e63c5aaaf4d63f41fd3b6694e42ce01e3750a5a489750b86ce4&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSR （Server Side Rendering）

- Hydration
	- 単なる文字列としてサーバー側から返却されるHTMLにイベントなどをアタッチし、HTMLを完成させる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/fe009ceb-3a80-4310-a190-9313ad0821b1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100413Z&X-Amz-Expires=3600&X-Amz-Signature=6d99f33d365f549a08bcf16f24860f7ec1fc08ffd33fb998bdab6b4b96a8e905&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/88790561-ccdc-47b1-beac-886c1c0d78d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100413Z&X-Amz-Expires=3600&X-Amz-Signature=4e34f7e88070a4f9c22609106c3de34d114d57cfdc74a93065a4e469d46d310f&X-Amz-SignedHeaders=host&x-id=GetObject)

- AWS アーキテクチャ
	- SSRするサーバーとデータソース
		- サーバー側でHTMLを構築する際にAPIを介したり、直接DBにリクエストする

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0a351321-aa65-4bbf-8965-f21dbdb1017f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100414Z&X-Amz-Expires=3600&X-Amz-Signature=01cda221af0e68646df2308fb2628ea570b56cb86533291530ea1048a34fdeb8&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda Edgeを利用するパターン

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4f597d78-25d8-478f-8765-82638aa3d924/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100414Z&X-Amz-Expires=3600&X-Amz-Signature=c19dcdbdc6d49040edf99a5fe10146e4f99acb94bddc2318195c468b7277f384&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRのレンダリングプロセス
	- FCPは短縮できる（画面の最初の描画は早い）
	- TTIは、CSRとほぼ変わらない（ユーザが利用できるようになるまでの時間は変わらない）
	- 画面は表示されているのに、ユーザが操作できないといった体験が生まれる可能性があることに注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/23b2817f-51c1-484e-a1c4-3e6850499ca7/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100415Z&X-Amz-Expires=3600&X-Amz-Signature=e6d733913ea29d77096986e0ac73baed174b3a9cc049aa670c0c5952884f79cc&X-Amz-SignedHeaders=host&x-id=GetObject)


	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/b27b2cdc-bc60-44dc-8c83-216aae6a83c9/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100415Z&X-Amz-Expires=3600&X-Amz-Signature=69508c2c52b32bebec0fda5a24ec09567612b9f1a611c6fb66618a54088d2698&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRの課題

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f508d3b1-1428-406a-a352-9c6352c5beea/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100415Z&X-Amz-Expires=3600&X-Amz-Signature=06ee38966f4b9f7c9d23e156bde8b377a2cacb6d03123c9ba9f79bcf9831a1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

	- これらを解決するStreaming HTMLやSelective Hydration
	- Streaming HTML
		- データフェッチが終わったところから、HTMLを部分的に返却していく
			- FCPやTTIを早めることができる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4b020a76-dbaa-4e2b-b20d-3363caa4f814/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100415Z&X-Amz-Expires=3600&X-Amz-Signature=9b0d0f9093d628b1afdd74069a5f0636a452f49fcdadc8390202ab4da7b0c731&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Selective Hydration
		- ReactのSuspenseなど

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a4e946ea-1292-4138-8933-a4fd97bd59bf/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100415Z&X-Amz-Expires=3600&X-Amz-Signature=160f99f6c3a64ff07627e72f83431188b9cae7486e1b0b4919f28d671ac75f30&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSG（Static Site Genetation）

- prerenderring
- SSRは、ユーザからのリクエストに応じてHTMLを生成する
- SSGは、事前にすべてのページを生成する
	- サーバーサイドでのレンダリングやフェッチが不要になり、ユーザに早く届けることができる
- AWS アーキテクチャ
	- ビルドしたHTMLをS3へ配置

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/95df6ff5-9980-4a68-b7a5-48977a9aa5f3/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100416Z&X-Amz-Expires=3600&X-Amz-Signature=328bd19b997e430b8a0b1dccb5efab137f44a9c913c2234d5c1e53d9429a8151&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSGの得意領域
	- 表示速度に特化

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9df8272a-e1b4-4ed4-8e95-5664e132cdc8/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100418Z&X-Amz-Expires=3600&X-Amz-Signature=e7711968d599aee2a7f990779c0de87af53e20799314d3f842790ad1b7b0cf0d&X-Amz-SignedHeaders=host&x-id=GetObject)

	- 注意点

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/41438ace-e9bb-4591-bac1-0e33d3444116/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100418Z&X-Amz-Expires=3600&X-Amz-Signature=e8d89b7c0810147848fa2b2da8de1e7912092cf280fd79344cbce7c802b9e01d&X-Amz-SignedHeaders=host&x-id=GetObject)


### ISR（Incremental Static Regeneration）

- ページに優先度をつけて、必要な分だけ生成することでSSGのビルドにかかる時間という課題を解決する

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0ccb84f1-ffb3-4842-9da3-3795d5e52662/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100418Z&X-Amz-Expires=3600&X-Amz-Signature=0f4b5d2a6a0dc557c4476d0ef34f10ece92ed8845ad458f10872e185620628d0&X-Amz-SignedHeaders=host&x-id=GetObject)

- Cache
	- 60秒ごとのrevalidate
	- オンデマンド revaidationも選択肢にある

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9813b124-73b0-4e5d-ab7c-e6623c86113d/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100421Z&X-Amz-Expires=3600&X-Amz-Signature=399e7176fbb7d5a9d07973b3680c1c746460d1b2443a2a0cf33b76d5da3a1559&X-Amz-SignedHeaders=host&x-id=GetObject)


## Next.jsのホスティングパターン


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0703b173-ca6d-4d47-910c-a6c3e10955d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100402Z&X-Amz-Expires=3600&X-Amz-Signature=e8e057159bbf46a66c91d80e9e49caa542b658f28cb2cf8d95c185dfc2b19bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

- Serverless
	- Next12までの一部の機能をサポートしていることやLambda@Edgeを利用している点への注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/53616558-6fde-458d-81a5-be31feb648a1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100421Z&X-Amz-Expires=3600&X-Amz-Signature=89c80d92c4268255c42d2f01fbbb08aedab86467985341c20a823db9914629b8&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Serverless Next.jsの開発は停止している

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a7bb99ef-973a-4e9d-9b69-259b6beb1e93/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100421Z&X-Amz-Expires=3600&X-Amz-Signature=6637b3e79cf12e80f006fe5539603903d01d34fd67a829adb9fd968a4d5fd5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Open Nextという方法

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/70c12591-f21b-4713-ae9c-50b4ae39225a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100421Z&X-Amz-Expires=3600&X-Amz-Signature=53e6dd2952e40b48e7960d0272903e6e37370c2069479cab2fb165de9fcc93c5&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda アダプター

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/1f53d93c-eeee-4183-85be-10373643a899/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100423Z&X-Amz-Expires=3600&X-Amz-Signature=b93a41e37cc77157e49fb5e2f8a889af7ade12df24c06fccd59502ffabd2ceab&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d23fce06-e5d6-47cf-9e43-5d7e87bb8516/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100422Z&X-Amz-Expires=3600&X-Amz-Signature=dd22aee2a43883ddcf0d7d6028af5c14c904e3c4cae6c7e75d101fc9cccf14c0&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ec42f0e2-e0ca-4956-a993-3af9efce370b/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100423Z&X-Amz-Expires=3600&X-Amz-Signature=e0bb47334c821e7adf5e0134bfc65ed46e22aaa84046eb1ac2caa2cdfcce1679&X-Amz-SignedHeaders=host&x-id=GetObject)

- Amplify Hosting
	- シンプルに利用できるが、すべての機能をサポートしていない

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3d112b7c-5549-4a2b-af49-82831e84a66a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100423Z&X-Amz-Expires=3600&X-Amz-Signature=80b647aaec1091eaca649b76c34d628a85e26411f0e921f3883e19a6ba645035&X-Amz-SignedHeaders=host&x-id=GetObject)

- Computing
	- 開発コストは上がるが、すべての機能を利用できる

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f48d6e33-61cf-4591-b8a5-70fca82fa829/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100425Z&X-Amz-Expires=3600&X-Amz-Signature=49c9fd6401292c85ed64a596ae92a53830f14943fad1dab7a1898cb9adc812d9&X-Amz-SignedHeaders=host&x-id=GetObject)


まとめ


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d21cb858-e015-4bf5-aeab-50c45370da09/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T100402Z&X-Amz-Expires=3600&X-Amz-Signature=bc8f21b9057ac3ce9b96db0a81a7ad3c49244e86475e937f27dda206e14c5551&X-Amz-SignedHeaders=host&x-id=GetObject)


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
