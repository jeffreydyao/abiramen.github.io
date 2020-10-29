FROM jekyll/builder:latest

EXPOSE "4000"

CMD jekyll serve \
	-d /tmp/_site \
	--host 0.0.0.0 --port 4000 \
	--config _config.yml \
	--watch --force_polling
