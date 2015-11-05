module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Francais",
        ko: "한국어",
        de: "Deutsch",
        es: "Español",
        tr: "Turkish"
        
    },
    header: {
        title: "비트쉐어 2.0",
        account: "계정",
        dashboard: "전체보기",
        explorer: "탐색기",
        exchange: "거래소",
        payments: "전송",
        logout: "로그아웃",
        settings: "설정",
        current: "현재 계정",
        create_account: "계정 생성",
        create_asset: "자산 생성",
        lock: "잠금",
        unlock: "잠금해제",
        help: "도움말",
        locked_tip: "지갑이 잠겨있습니다. 잠금해제를 눌러주세요.",
        unlocked_tip: "지갑이 잠금해제 되어있습니다. 잠금을 눌러주세요."
    },
    operation : {
        pending: "승인대기 중... %(blocks)s 블록"
    },
    account: {
        welcome: "비트쉐어 2.0 이용을 환영합니다",
        asset: "자산",
        market_value: "시장가치",
        hour_24: "24시간 변동액",
        recent: "최근 활동",
        name: "계정명",
        more: "더 보기",
        deposit_withdraw: "입출금",
        member: {
            stats: "회원정보",
            join: "가입일",
            registrar: "등록인",
            referrer: "추천인",
            lifetime_referrer: "평생회원 추천인",
            network_percentage: "네트워크",
            fee_allocation: "수수료 분배",
            membership: "멤버쉽",
            fees_paid: "지불된 평생회원 수수료",
            fees_pending: "보류중인 수수료",
            fees_vested: "보류중인 확정 수수료",
            referrals: "피추천인",
            rewards: "캐쉬백 리워드",
            cashback: "캐쉬백",
            vested: "확정",
            unknown: "잘못된 계정",
            lifetime: "평생회원",
            basic: "기본회원",
            annual: "연간회원",
            upgrade_lifetime: "평생회원권 구입",
            subscribe: "연간회원권 구입",
            expires: "만료됨",
            membership_expiration: "멤버쉽 만료일"
        },
        user_issued_assets: {
            symbol: "약자",
            name: "자산 이름",
            description: "설명",
            max_supply: "최대 공급량",
            precision: "소수자리수",
            to: "다음 계정으로 발행",
            details: "세부사항"
        },
        connections: {
            known: "나와 연결됨",
            "black": "나를 차단함"
        },
        perm: {
            active: "활성화된 사용권한",
            owner: "소유자 사용권한",
            publish: "변경사항 적용",
            reset: "변경사항 되돌리기",
            add: "사용권한 추가",
            type: "종류",
            key: "키/이름",
            weight: "가중치",
            threshold: "적용기준치",
            confirm_add: "추가",
            cancel: "취소",
            add_permission_label: "계정명/키 및 가중치를 입력하세요",
            account_name_or_key: "계정명 또는 키",
            memo_public_key: "메모 공개키"
        },
        votes: {
            proxy: "대리투표 계정",
            no_proxy: "대리투표 사용안함",
            name: "이름",
            info: "정보",
            votes: "득표수",
            url: "웹페이지",
            support: "찬성하기",
            workers: "예산 항목",
            publish: "변경사항 적용",
            add_witness: "추가",
            remove_witness: "제거",
            remove_committee: "제거",
            add_committee: "추가",
            add_committee_label: "위원",
            add_witness_label: "증인",
            approve_worker: "Approve worker proposal",
            reject_worker: "Reject worker proposal"            
        },
        options: {
            num_witnesses: "선호 증인 수",
            num_committee: "선호 위원 수",
            memo_key: "메모 키"
        },
        upgrade: "계정 업그레이드",
        unfollow: "친구해제",
        follow: "팔로우",
        pay: "전송",
        overview: "개요",
        bts_market: "종목",
        history: "거래기록",
        payees: "수취인",
        permissions: "사용권한",
        voting: "투표",
        orders: "주문내역",
        select_placeholder: "계정을 선택하세요...",
        errors: {
            not_found: "%(name)s 계정은 존재하지 않습니다. 철자를 정확히 입력하셨습니까?",
            invalid: "잘못된 계정이름",
            unknown: "알 수 없는 계정",
            not_yours: "소유 계정이 아님"
        },
        collaterals: "보증금 포지션",
        eq_value: "Equivalent Value",
        please_create_account: "계정을 생성해주세요",
        create_account: "계정 생성",
        identicon: "아이덴티콘",
        pay_from: "Pay From",
        existing_accounts: "기존 계정",
        name_input: {
            name_is_taken: "Account name is already taken.",
            not_found: "Account not found.",
            premium_name_faucet: "This is a premium name. Premium names are more expensive and can't be registered for free by faucet. Try to select another name containing at least one dash, number or no vowels.",
            premium_name_warning: "This is a premium name that is more expensive to register. Regular names have at least one dash, number or no vowels."
        }
    },
    pagination: {
        newer: "이전",
        older: "다음"
    },
    transfer: {
        from: "보내는 사람",
        pay_from: "전송받음",
        amount: "금액",
        to: "받는 사람",
        memo: "메모",
        fee: "수수료",
        send: "전송",
        final: "전송 후 잔고",
        balances: "잔고",
        available: "사용가능액",
        errors: {
            req: "필수 입력",
            pos: "금액은 양수를 입력해주세요",
            valid: "유효한 값을 입력해주세요",
            balance: "전송 후 잔고는 0보다 커야 합니다"
        },
        back: "뒤로가기",
        confirm: "확인",
        broadcasting: "처리중...",
        broadcast: "거래가 네트워크에 전파되었습니다",
        again: "추가 거래",
        see: "내 전송내역 보기",
        close: "닫기"
    },
    transaction: {
        confirm: "거래 확인",
        broadcast_success: "거래가 처리되었습니다",
        transaction_confirmed: "거래가 승인되었습니다",
        broadcast_fail: "거래를 처리할 수 없음: %(message)s",
        broadcasting: "처리중..",
        broadcasting_short: "처리중..",
        sent: "계정에서",
        to: "를 전송함. 수신인:",
        received: "계정에서",
        from: "를 수신함. 전송인:",
        amount_sell: "판매 금액",
        expiration: "만기",
        fill_or: "Fill or kill",
        min_receive: "수신 최소 금액",
        seller: "판매자",
        collateral: "담보",
        coll_ratio: "초기 담보 비율",
        coll_maint: "담보 유지 비율",
        "create_key": "공개키 생성",
        reg_account: "계정 등록",
        was_reg_account: "계정이 등록됨. 등록자:",
        create_asset: "자산 생성",
        limit_order_sell: "주문번호 #%(num)s %(sell_amount)s 를 다음 가격에 매도 ",
        limit_order_buy: "주문번호 #%(num)s %(buy_amount)s 를 다음 가격에 매수 ",
        limit_order_cancel: "주문 취소",
        short_order: "공매도주문 요청",
        short_order_cancel: "공매도 취소",
        at: "at",
        coll_of: "with collateral of",
        call_order_update: "콜 주문 업데이트",
        lifetime_upgrade_account: "평생회원으로 업그레이드",
        annual_upgrade_account: "연간회원으로 업그레이드",
        update_account: "계정 업데이트",
        whitelist_account: "계정을 화이트리스트에 추가",
        whitelisted_by: "화이트리스트에 추가됨",
        transfer_account: "계정 이전",
        update_asset: "자산 업데이트",
        update_feed_producers: "자산의 가격정보 제공자를 업데이트함",
        feed_producer: "자산에 대한 가격정보 제공자로 추가됨",
        feed_price: "가격정보",
        asset_issue: "발행",
        was_issued: "발행됨",
        by: "by",
        burn_asset: "소각",
        fund_pool: "자산 수수료 기금을 충전",
        asset_settle: "다음 자산에 대한 강제청산을 요청",
        asset_global_settle: "전체 자산 강제청산을 요청",
        publish_feed: "자산에 대한 가격정보를 발행",
        committee_member_create: "위원 생성",
        witness_create: "증인 생성",
        witness_update: "증인 업데이트",
        witness_pay: "증인 봉급을 다음 계정으로 인출",
        witness_receive: "Received witness from witness",
        proposal_create: "제안서를 생성",
        proposal_update: "제안서를 업데이트",
        proposal_delete: "제안서를 삭제",
        withdraw_permission_create: "다음 계정에 출금 권한을 부여",
        withdraw_permission_update: "다음 계정의 출금 권한을 업데이트",
        withdraw_permission_claim: "다음 계정에 출금 권한을 요청",
        withdraw_permission_delete: "다음 계정에 출금 권한을 삭제",
        paid: "지불됨",
        obtain: "to obtain",
        global_parameters_update: "전체 매개변수를 업데이트",
        file_write: "파일 쓰기",
        vesting_balance_create: "created vesting balance of",
        for: "for",
        vesting_balance_withdraw: "Withdrew vesting balance of",
        bond_create_offer: "Created bond offer",
        bond_cancel_offer: "Cancelled bond offer",
        bond_accept_offer: "Accepted bond offer of",
        bond_claim_collateral: "Claimed collateral of",
        bond_pay_collateral: "Paid collateral of",
        create_worker: "Created a worker with a pay of",
        custom: "Created a custom operation",
        order_id: "주문 ID",
        balance_claim: "%(balance_amount)s를 잔고 ID #%(balance_id)s에서 청구함",
        balance_owner: "잔고 소유자 키",
        balance_id: "잔고 ID",
        deposit_to: "계정으로 입금 처리됨",
        claimed: "총 청구액",
        borrow_amount: "대출 금액",
        funding_account: "Funding account",
        delta_collateral: "담보금 변경",
        delta_debt: "대출액 변경",
        new_url: "웹사이트",
        publisher: "가격정보 제공자",
        market_fee: "종목 수수료",
        max_market_fee: "최대 종목 수수료",
        trxTypes: {
            transfer: "전송",
            limit_order_create: "주문",
            limit_order_cancel: "주문 취소",
            call_order_update: "Update call order",
            account_create: "계정 생성",
            account_update: "계정 업데이트",
            account_whitelist: "계정 화이트리스트",
            account_upgrade: "계정 업그레이드",
            account_transfer: "계정 거래",
            asset_create: "자산 생성",
            asset_update: "자산 업데이트",
            asset_update_bitasset: "스마트코인 업데이트",
            asset_update_feed_producers: "자산 피드 생성자 업데이트",
            asset_issue: "자산 발행",
            asset_reserve: "자산 소각",
            asset_fund_fee_pool: "자산 수수료 기금 충전",
            asset_settle: "자산 강제청산",
            asset_global_settle: "자산 전체 강제청산",
            asset_publish_feed: "자산 가격정보 발행",
            committee_member_create: "위원 생성",
            witness_create: "증인 생성",
            witness_update: "증인 업데이트",
            witness_withdraw_pay: "증인 봉급 인출",
            proposal_create: "제안서 생성",
            proposal_update: "제안서 업데이트",
            proposal_delete: "제안서 삭제",
            withdraw_permission_create: "출금권한 생성",
            withdraw_permission_update: "출금권한 업데이트",
            withdraw_permission_claim: "출금권한 요청",
            withdraw_permission_delete: "출금권한 삭제",
            fill_order: "매매 체결",
            committee_member_update_global_parameters: "전체 매개변수 업데이트",
            vesting_balance_create: "확정 잔고 생성",
            vesting_balance_withdraw: "확정 잔고 출금",
            worker_create: "예산 항목 생성",
            custom: "사용자 정의",
            assert: "Assert operation",
            balance_claim: "잔고 청구",
            override_transfer: "Override transfer"
        }
    },
    explorer: {
        accounts: {
            title: "계정"
        },
        blocks: {
            title: "블록체인",
            globals: "전체 매개변수",
            recent: "최근 블록",
            trx: "거래",
            block_times: "블록 타임",
            block_time: "블록 타임",
            transactions: "거래 수",
            recently_missed_blocks: "최근 누락 블록 수",
            trx_per_block: "블록당 거래",
            active_committee_members: "활동중인 위원",
            active_witnesses: "활동중인 증인",
            avg_conf_time: "평균 승인시간",
            trx_per_sec: "초당 거래",
            last_block: "마지막 블록",
            current_block: "현재 블록"

        },
        block: {
            title: "블록",
            id: "블록 ID",
            witness: "증인",
            count: "거래 수",
            date: "날짜",
            time: "시간",
            previous: "이전",
            previous_secret: "이전 비밀해쉬",
            next_secret: "다음 비밀해쉬",
            op: "작업",
            trx: "거래",
            op_type: "작업 유형",
            fee_payer: "수수료 지불 계정",
            key: "공개키",
            transactions: "거래 수",
            account_upgrade: "업그레이드할 계정",
            lifetime: "평생회원으로 업그레이드",
            authorizing_account: "계정 인증",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "업데이트할 자산",
            common_options: "일반 옵션",
            new_options: "새 옵션",
            new_producers: "새로운 가격정보 발행자",
            asset_issue: "발행량",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "콜 한도",
            short_limit: "공매도 한도",
            settlement_price: "강제청산 가격"
        },
        assets: {
            title: "자산",
            market: "스마트코인",
            user: "사용자 자산",
            symbol: "기호",
            id: "ID",
            issuer: "발행자",
            precision: "소수 자리수"
        },
        asset: {
            title: "자산",
            not_found: "자산 %(name)s이 존재하지 않음",
            summary: {
                asset_type: "자산 종류",
                issuer: "발행자",
                current_supply: "현재 공급량",
                stealth_supply: "익명 공급량",
                market_fee: "거래 수수료",
                max_market_fee: "최대 거래수수료"
            },
            price_feed: {
                price_feed: "가격정보",
                settlement_price: "청산 가격",
                maintenance_collateral_ratio: "Maintenance collateral ratio",
                maximum_short_squeeze_ratio: "Maximum short squeeze ratio"
            },
            fee_pool: {
                fee_pool: "수수료 풀",
                core_exchange_rate: "Core exchange rate",
                pool_balance: "풀 잔고",
                unclaimed_issuer_income: "Unclaimed issuer income"
            },
            permissions: {
                permissions: "사용권한",
                max_market_fee: "최대 거래수수료",
                max_supply: "최대 공급량",
                chargeMarketFee: "거래수수료 변경",
                allowWhiteList: "화이트리스트 사용",
                allowIssuerOverride: "Allow issuer override",
                restrictTransfers: "전송 제한",
                allowForceSettle: "강제청산 사용",
                allowGlobalSettle: "Allow global settle",
                allowStealthTransfer: "익명전송 사용",
                blacklist_authorities: "Blacklist authorities",
                blacklist_markets: "Blacklist markets",
                whitelist_authorities: "Whitelist authorities",
                whitelist_markets: "Whitelist markets"
            },
            price_feed_data: {
                title: "가격정보 데이터",
                settlement_price: "청산 가격",
                core_exchange_rate: "CER",
                maintenance_collateral_ratio: "MCR",
                maximum_short_squeeze_ratio: "MSSR",
                publisher: "Publisher",
                published: "Published"
            }
        },
        witnesses: {
            title: "증인",
            current: "현재 증인",
            participation: "참여율",
            pay: "초당 지불액",
            budget: "남은 예산",
            next_vote: "다음 투표 업데이트",
            card: "카드뷰",
            table: "테이블뷰",
            rank: "순위",
            last_confirmed: "마지막 승인블록",
            missed: "누락 블록수"
            
        },
        committee_members: {
            title: "위원",
            active: "활동중인 위원 수"
        },
        committee_member: {
            title: "위원"
        },
        workers: {
            title: "예산 항목"
        },
        proposals: {
            title: "제안서"
        },
        account: {
            title: "계정"
        }
    },
    settings: {
        inverseMarket: "선호 거래쌍",
        unit: "선호 화폐단위",
        confirmMarketOrder: "주문시 주문확인을 함",
        locale: "언어 전환",
        confirm_yes: "항상",
        confirm_no: "사용안함",
        always_confirm: "항상 확인을 함",
        wallets: "지갑",
        connection: "API 연결",
        add_ws: "새로운 웹소켓 API 추가",
        remove_ws: "웹소켓 API 제거",
        faucet_address: "Faucet Address"
    },
    footer: {
        title: "비트쉐어 2.0",
        block: "최근 블록",
        loading: "가져오는 중..."
    },
    exchange: {
        price_history: "과거 시세",
        order_depth: "주문 깊이",
        market_history: "거래 내역",
        balance: "잔고",
        lowest_ask: "매도 호가",
        highest_bid: "매수 호가",
        total: "총액",
        value: "총액",
        price: "가격",
        latest: "최종 가격",
        call: "콜 가격",
        core_rate: "Fee Rate",
        settle: "청산 가격",
        squeeze: "마진콜 가격",
        maintenance: "Maintenance Call Price",
        your_price: "내 콜 가격",
        volume: "거래량",
        spread: "스프레드",
        quantity: "총량",
        buy: "매수",
        sell: "매도",
        receive: "Receive",
        vertical: "수직시세",
        horizontal: "수평시세",
        confirm_buy: "주문 확인: %(buy_amount)s %(buy_symbol)s 을 %(price_amount)s %(price_symbol)s 에 매수",
        confirm_sell: "주문 확인: %(sell_amount)s %(sell_symbol)s 을 %(price_amount)s %(price_symbol)s 에 매도",
        market_name: "종목명",
        quote_supply: "유통량",
        base_supply: "유통량"
    },
    markets: {
        base: "기초 자산",
        market_search: "종목 찾기",
        filter: "필터",
        core_rate: "Core rate",
        supply: "공급량",
        search: "찾기",
        preferred: "즐겨찾는 종목"
    },
    wallet: {
        title: "지갑",
        confirm: "비밀번호 확인",
        password: "비밀번호",
        existing_password: "현재 비밀번호",
        change_password: "비밀번호 변경",
        change_wallet: "지갑 변경",
        wallet_created: "지갑이 생성됨",
        create_wallet: "지갑 생성",
        import_bts1: "비트쉐어 0.9.3c에서 가져오기",
        setup_wallet: "지갑을 설정하세요",
        delete_wallet: "지갑 삭제",
        delete_confirm_line1: "정말로 삭제하시겠습니까?",
        delete_confirm_line2: "예상치 못한 나쁜 일이 벌어질 수 있습니다!",
        delete_confirm_line3: "삭제되면 되돌릴 수 없습니다",
        delete_wallet_name: "지갑(%(name)s)을 삭제함",
        balance_claims: "잔고 청구",
        download: "다운로드",
        name: "지갑 이름",
        create: "생성",
        console: "지갑 관리 콘솔",
        create_backup: "백업 생성",
        backup_brainkey: "브레인키 백업",
        create_backup_of: "(%(name)s 지갑의 백업을 생성)",
        import_backup: "백업파일 불러오기",
        restore_backup: "백업파일 복구",
        import_keys: "키 가져오기",
        import_keys_tool: "키 가져오기 도구",
        brainkey: "브레인키",
        new_wallet: "새 지갑",
        active_wallet: "현재 지갑",
        verified: "확인됨",
        verify_prior_backup: "이전 백업 확인",
        brainkey_not_verified: "브레인키가 확인되지 않았습니다",
        cancel: "취소",
        reset: "재설정",
        done: "완료",
        verify: "확인",
        invalid_format: "잘못된 포맷",
        enter_password: "비밀번호를 입력하세요",
        downoad: "다운로드",
        new_wallet_name: "새 지갑 이름",
        wallet_exist: "지갑이 이미 존재합니다. 새로운 이름을 선택하세요",
        wallet_exist_with_name: "(%(name)s) 지갑이 이미 존재합니다. 다른 이름을 선택하세요",
        accept: "Accept",
        ready_to_restore: "복원할 준비가 되었습니다",
        restore_wallet_of: "(%(name)s 지갑 복원)",
        restore_success: "성공적으로 (%(name)s) 지갑을 복원했습니다",
        change: "(%(name)s 지갑 변경)",
        import_20_notice1: "비트쉐어 2.0백업을 먼저 가져오세요",
        import_20_notice2: "(만약 가지고 있으시다면)",
        loading_balances: "청구가능 잔고를 가져오는 중",
        no_balance: "청구가능 잔고 없음",
        claim_balance: "잔고 청구",
        claim_balances: "잔고 청구",
        balance_claim_lookup: "잔고 검색",
        unclaimed: "미청구액",
        unclaimed_vesting: "미청구액 (확정금)",
        no_accounts: "계정이 없음",
        brainkey_no_match: "브레인키가 일치하지 않습니다",
        reenter_brainkey: "브레인키를 다시 입력하세요",
        pwd4brainkey: "브레인키를 확인하시려면 비밀번호를 입력하세요",
        show_brainkey: "브레인키 확인",
        brainkey_w1: "WARNING: Print this out, or write it down.",
        brainkey_w2: "Anyone with access to your recovery key will",
        brainkey_w3: "have access to funds within this wallet.",
        custom_brainkey: "Custom Brainkey (advanced)",
        last_backup: "Last backup",
        never_backed_up: "This Wallet has never been backed up",
        need_backup: "This Wallet needs a backup",
        noneed_backup: "No backup is needed"
    },
    borrow: {
        title: "Collateral position for %(asset_symbol)s",
        no_valid: "%(asset_symbol)s 에 대한 유효한 가격정보가 없음",
        coll_ratio: "담보 비율",
        call_limit: "종목내 콜 한도",
        adjust: "포지션 조정",
        close: "Close Position",
        update: "Update",
        errors: {
            below: "Collateral ratio below maintenance level",
            collateral: "Insufficient collateral balance"
        }
    },
    modal : {
      issue : {
        to: "발행할 계정",
        amount: "발행량",
        submit: "자산 발행"
      },
      withdraw : {
        amount: "Amount to Withdraw",
        address: "Withdraw to Address",
        submit: "Withdraw"
      }
    },
    init_error: {
        title: "Application initialization issues",
        ws_status: "웹소켓 연결 상태",
        retry: "다시 시도",
        connected: "연결됨",
        not_connected: "연결안됨"
    }
};
